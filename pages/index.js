import Link from "next/link";
import Image from "next/image";
import pic from "../pic.jpg";
export default function Home() {
  return (
    <>
      <div className="s-gallery-container">
        <div className="society-name">
          <h1 className="s-name">INNOVISION</h1>
        </div>
        <div className="society-gallery-container">
          <div className="flex-box">img1</div>
          <div className="flex-box">img2</div>
          <div className="flex-box">img2</div>
          <div className="flex-box">img3</div>
          <div className="flex-box">img4</div>
          <div className="flex-box">img5</div>
          <div className="flex-box">img6</div>
          <div className="flex-box">img7</div>
          <div className="flex-box">img8</div>
          <div className="flex-box">img9</div>
          <div className="flex-box">img10</div>
          <div className="flex-box">img11</div>
          <div className="flex-box">img12</div>
          <div className="flex-box">img13</div>
          <div className="flex-box">img14</div>
          <div className="flex-box">img15</div>
          <div className="flex-box">img16</div>
        </div>
      </div>
    </>
  );
}
