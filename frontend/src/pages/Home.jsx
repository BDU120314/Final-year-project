import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BsFillMicFill } from "react-icons/bs";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-gray-200 shadow-md text-black h-[80px] flex justify-between items-center px-5 max-w-full">
        <div className="flex justify-center items-center">
          <img
            className="w-[60px] h-[60px] object-cover rounded-full"
            src="logo.jpg"
            alt="ardmos"
          />
          <h2 className="ml-2 font-bold">ARMDOS</h2>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-full max-w-[500px]">
            <input
              className="w-full bg-white h-10 pl-12 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="search"
              name="query"
              placeholder="Search..."
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-4">
              <FaSearch />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center flex-5">
          <ul className="flex justify-between items-center gap-10 ">
            <Link to="/home">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            <Link to="/login">
              <li>Login</li>
            </Link>
          </ul>
        </div>
      </header>

      {/* //main part */}
      <main className="flex-col shadow-md text-black   flex justify-between items-center px-5 max-w-full">
        <div className="flex justify-center items-center">
          <div className="mr-12">
            <img src="logo.jpg" alt="ardmos" />
            <p>
             Posted Date
            </p>
            <p>
              Post Tittle
            </p>
          </div> 
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              sequi quae, porro impedit sunt molestias vel. Error omnis alias
              inventore a, nam facere fuga ut reprehenderit tempore
              necessitatibus ex quia?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A tenetur 
              iusto odio hic fugit vero ut, odit, neque modi ratione accusamus explicabo 
              exercitationem sequi ea 
              temporibus totam, reiciendis perferendis. Facilis!
            </p>
          </div>
        </div>
      </main>

      {/* //footer */}

      <div className="flex-none mt-auto">
        <footer className="bg-gray-900 h-[100px] flex justify-between items-center px-5 max-w-full">
          <ul className="justify-between items-center gap-10 mb-8 p-25 ml-[300px]">
            <Link to="/home">
              <li>Privacy Policy</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>

          <ul className="pr-16">
            <h3>Social Media</h3>
            <Link to="/contact">
              <li>Facebook</li>
            </Link>
            <Link to="/login">
              <li>Twitter</li>
            </Link>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Home;
