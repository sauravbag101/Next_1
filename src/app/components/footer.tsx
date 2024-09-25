

function footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div className="  mb-4">About Us
        <p className="pt-4 hover:text-white transition-colors duration-300 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatum eos deleniti
             perspiciatis, et sequi eveniet assumenda vel illo esse ullam ipsum quasi ea dolor sit
              itaque delectu nam soluta.</p></div>
              <div className="hover:text-white transition-colors duration-300 text-bold">Quick Link
        <p className="pt-4">Home</p>
        <p>About</p>
        <p>Features</p>
        <p>Data</p>
        <p>Contact</p>
        </div>
        <div className="hover:text-white transition-colors duration-300 text-bold">Follow Us
        <p className="pt-4">FaceBook</p>
        <p>InstaGram</p>
        <p>Twitter</p>
        <p>Snapchat</p>
        <p>Whatapp</p>
        </div>
        <div className="hover:text-white transition-colors duration-300 text-bold">Contact Us
        <p className="pt-4">96 Lower Chitpur Road, Burabazar</p>
        <p>Kolkata</p>
        <p>West Bengal</p>
        <p>03322385091</p>
        <p>700007, India</p>
        </div>
        </div>
        <p className="text-white text-center py-10 text-m">@2024 Phone School. All rights Reserved.</p>
    </footer>
  )
}

export default footer
