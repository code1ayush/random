// import Link from "next/link";

// const about = () => {
//   return (
//     <div>
//       about
//       <Link href="/">Home</Link>
//     </div>
//   );
// };

// export default about;

import React, { useRef, useEffect } from "react";

const about = () => {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      ref.current.style.backgroundPositionY = `${scrollTop * 0.5}px`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
    >
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam amet,
      ratione repellat, omnis nisi eveniet ducimus consequatur praesentium
      obcaecati earum itaque quisquam nostrum deleniti eum enim architecto at
      qui aliquid fugiat aliquam? Amet natus quas facere necessitatibus minima
      quidem. Placeat voluptates facilis labore harum accusamus quas laboriosam
      doloremque quisquam officiis ipsam necessitatibus in, quaerat
      reprehenderit optio sed odit, quia veniam corporis vero, ab fugit ad
      recusandae. Modi quas magnam tempore inventore accusantium soluta
      recusandae illum obcaecati maiores. Vitae animi officia autem. Minima, ab
      ad rem, quod quasi laborum assumenda aut architecto recusandae quae nulla
      reprehenderit expedita eveniet quaerat vitae doloribus.
    </div>
  );
};

export default about;
