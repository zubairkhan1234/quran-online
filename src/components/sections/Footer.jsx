import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-gray-300 pt-12 pb-6">
      {/* Newsletter Section */}
      <div className="container m-auto">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 mb-8">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-sm text-gray-400">
              Sign up with your email address for our new courses and events!
            </p>
          </div>
          <form className="mt-4 md:mt-0 flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none w-full md:w-72"
            />
            <button
              type="submit"
              className="bg-[#659a68] text-white px-4 py-2 rounded-r-lg"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-semibold mb-4">AL QURAN</h4>
            <p className="text-sm text-gray-400">
              We take learning online to the next level by providing online
              classroom settings, qualified and trained teachers, organized and
              structured courses.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Find a course</h4>
            <ul className="space-y-2 text-sm">
              <li>Adult Courses</li>
              <li>Kid & Teens Courses</li>
              <li>Learn Arabic Online for Kids</li>
              <li>Online Arabic Teachers</li>
              <li>Online Quran Teachers</li>
              <li>Online Hifz Program</li>
              <li>Islamic Studies for Kids</li>
              <li>Unlock Quran Essentials</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">AL Quran</h4>
            <ul className="space-y-2 text-sm">
              <li>Help And Support</li>
              <li>About AL QURAN?</li>
              <li>Why AL QURAN?</li>
              <li>Study Abroad Program</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Student Login</li>
              <li>Frequently Asked Questions</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources & More</h4>
            <ul className="space-y-2 text-sm">
              <li>Blog</li>
              <li>Free Arabic Downloads</li>
              <li>Recommended Arabic Books</li>
              <li>Student Spotlight</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
          </div>

          <div className="flex space-x-6 text-sm text-gray-400">
            <span>Terms & Condition</span>
            <span>Privacy Policy</span>
            <span>Support</span>
          </div>

          <p className="text-sm text-gray-500 mt-4 md:mt-0">
            © copyright alquran2023. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
