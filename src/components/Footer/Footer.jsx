import { Facebook, Github, Linkedin } from "lucide-react";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <footer className=" text-white py-8 bg-gradient-to-br from-[#632EE3] to-[#9F62F2]">
      <Container>
        <div className="space-y-6">
          <div>
            
          </div>
          <hr className="text-gray-300" />

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h2 className="text-xl font-bold mb-4">Resources</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="inline-block hover:text-gray-300">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block hover:text-gray-300">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block hover:text-gray-300">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Services</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="inline-block hover:text-gray-300">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block hover:text-gray-300">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block hover:text-gray-300">
                    Digital Consulting
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block hover:text-gray-300">
                    API Integration
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Legal</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="inline-block hover:text-gray-300">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block hover:text-gray-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block hover:text-gray-300">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="inline-block hover:text-gray-300">
                    License Info
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Social Links</h2>
              <ul className="space-y-2">
                <li className="flex align-items">
                  <a
                    href="https://www.linkedin.com/in/md-rakibul-islam-9399b3228/"
                    className="flex items-center gap-2 hover:text-gray-300 ml-2"
                  >
                    <span>
                      <Linkedin size={18} />
                    </span>
                    <span>Linkedin</span>
                  </a>
                </li>
                <li className="flex align-items">
                  <a
                    href="https://github.com/programmerrakibul"
                    className="flex items-center gap-2 hover:text-gray-300 ml-2"
                  >
                    <span>
                      <Github size={18} />
                    </span>
                    <span>Github</span>
                  </a>
                </li>
                <li className="flex align-items">
                  <a
                    href="https://www.facebook.com/programmerrakibul/"
                    className="flex items-center gap-2 hover:text-gray-300 ml-2"
                  >
                    <span>
                      <Facebook size={18} />
                    </span>
                    <span>Facebook</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="mt-4 text-gray-300" />

          <div className="text-center">
            <p>Copyright &copy; 2025 - All right reserved</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
