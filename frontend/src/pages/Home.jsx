import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col bg-gray-50 h-screen ">
      
      <header className="bg-gray-200 text-black h-[80px] flex justify-between items-center">
        <nav className="flex justify-between items-center p-5">
                <div className="flex-1 flex justify-center items-center bg-red-500 ">
                    <img src="" alt="ardmos" />
                    <h2>ARMDOS</h2>
                </div>
                <div className="flex-3 border-0">
                    <input type="search" name="" id="" />
                </div>
                <div className="flex justify-between items-center flex-5 ">
                    <ul className="flex justify-between items-center flex-grow gap-5 ">
                        <Link>
                        <li>Home</li>
                        </Link>
                        <Link>
                        <li>About</li>
                        </Link>
                        <Link>
                        <li>Contact</li>
                        </Link>
                        <Link>
                        <li>Login</li>
                        </Link>            
                    </ul>
                </div>
        </nav>
      </header>
         {/* //main part */}
      <main>
        <div>
            <img src="" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae officiis perspiciatis aperiam, vel cum labore, corporis nihil quasi repellat id natus commodi ipsa voluptas distinctio blanditiis. Obcaecati a labore placeat.</p>
        </div>
      </main>
   {/* //footer */}
   <footer>

   </footer>
       
    </div>
  );
};

export default Home;
