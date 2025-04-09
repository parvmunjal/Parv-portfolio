
const Footer = () => {
  return (
    <footer className="bg-navy text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-slate-lighter">
          Designed & Built by Parv Munjal
        </p>
        <p className="text-slate-lighter text-sm mt-2">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
