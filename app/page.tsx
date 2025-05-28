import Header from "@/components/header/page";
import About  from "@/components/about/page";
import Products from "@/components/products/page";
import AboutNew from "@/components/aboutNew/page";
import Footer  from "@/components/footer/page";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Products></Products>
      <AboutNew></AboutNew>
      <Footer></Footer>
    </div>
  );
}
