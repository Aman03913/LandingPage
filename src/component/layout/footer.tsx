import React from 'react'
import Footer from "/public/footer.png";
import Image from 'next/image';
function footer() {
  return (
    <div>
      <Image src={Footer.src} alt="Hello" />
    </div>
  )
}

export default footer
