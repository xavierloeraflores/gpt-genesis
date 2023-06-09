import Header from "../header/header";
import Footer from "../Footer/footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="Page">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
