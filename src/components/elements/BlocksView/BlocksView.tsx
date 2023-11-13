import { ReactElement, ReactNode } from "react";
import { useBlocks, UseBlocksQueryOptions } from "@/api/Blocks";
import { BlockContent } from "@/api/Blocks/types";
import { parseHTML } from "@/utils/componentUtils";

interface BlocksViewProps {
  identifier: string;
  isBanner?: boolean;
  loadingComponent?: ReactElement;
  className?: string;
  children?: (data?: BlockContent | null, isLoading?: boolean) => ReactNode;
  options?: UseBlocksQueryOptions;
}
export default function BlocksView(props: BlocksViewProps) {
  const {
    identifier,
    isBanner = false,
    loadingComponent,
    options,
    className = "",
    children,
  } = props;

  const blocksQuery = useBlocks(identifier, isBanner, options);

  if (children) {
    // FIXME: loadingComponent is not showing here
    if (blocksQuery?.isLoading && loadingComponent && blocksQuery) return loadingComponent;

    return (
      <>
        {children(blocksQuery.data?.data?.items, blocksQuery.isLoading || blocksQuery.isFetching)}
      </>
    );
  }

  if (blocksQuery.isLoading) {
    return <div className={className}>{loadingComponent}</div>;
  }

  return (
    <div
      className={blocksQuery.data?.data?.items?.content ? className : ""}
      dangerouslySetInnerHTML={parseHTML(blocksQuery.data?.data?.items?.content || "")}
    />
  );
}
