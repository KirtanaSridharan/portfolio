import { personalInfo } from '../data/personalInfo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-600">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
        
        <div>
          <p className="text-gray-600 text-sm">
            Designed & Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
