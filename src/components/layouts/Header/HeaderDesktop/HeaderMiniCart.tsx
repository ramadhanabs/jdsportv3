import React from 'react'

const HeaderMiniCart = () => {
  return (
    <div className="flex items-center">
      <div className="py-3 px-4 rounded-l-sm text-xs bg-[#ccc] border border-transparent">
        <p>1 Produk / Rp2.000.000</p>
      </div>
      <button className="bg-primary h-[42px] px-7 text-xs rounded-r-sm items-stretch">
        Checkout
      </button>
    </div>
  );
}

export default HeaderMiniCart