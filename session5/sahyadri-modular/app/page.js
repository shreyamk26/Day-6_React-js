import Image from "next/image";

export default function Home() {
  return (
   <div className="min-h-screen bg-gray p-2 mt-3">
     <nav className="flex flex-row justify-between text-lg font-bold">
       <img src="https://www.sahyadri.edu.in/images/logo.svg" width={200}/>
       <div className="flex flex-row space-x-5">
          <a>About</a>
          <a>Academics</a>
          <a>Admissions</a>
          <a>Life at sahyadri</a>
          <a>Placement</a>
          <a>Recruitment</a>
       </div>
     </nav>
    
     <section id="Partners">
  <div className="h-[100px] flex flex-row justify-between shadow-md mx-10 my-10 p-3">
    <img className="h-full w-auto object-contain" src="https://www.sahyadri.edu.in/images/home/nba.jpg" alt="NBA" />
    <img className="h-full w-auto object-contain" src="https://www.sahyadri.edu.in/images/home/vtu.jpg" alt="VTU" />
    <img className="h-full w-auto object-contain" src="https://www.sahyadri.edu.in/images/home/aicte.jpg" alt="AICTE" />
    <img className="h-full w-auto object-contain" src="https://www.sahyadri.edu.in/images/home/ktech.png" alt="K-Tech" />
    <img className="h-full w-auto object-contain" src="https://www.sahyadri.edu.in/images/home/mhrdIC.jpg" alt="MHRD Innovation Cell" />
  </div>
</section>

     <section id="Promotion">
      <div className="h-[300px] w-full">
        <img src="https://www.sahyadri.edu.in/images/banners/home1.jpg" />
      </div>
     </section>
     <section id="Partners">
        <div className="h-[100px] flex flex-row shadow-md mx-10 my-10 p-3 space-x-10">
          <img src="https://www.sahyadri.edu.in/images/home/nba.jpg"/>
          <img src="https://www.sahyadri.edu.in/images/home/nba.jpg"/>
          <img src="https://www.sahyadri.edu.in/images/home/nba.jpg"/>
          <img src="https://www.sahyadri.edu.in/images/home/nba.jpg"/>
        </div>
     </section>
     <section id="Promotion">
      <div className="h-[300px] w-full">
        <img src="https://www.sahyadri.edu.in/images/banners/home1.jpg" />
      </div>
     </section>
     <section id="Partners">
        <div className="h-[100px] flex flex-row shadow-md mx-10 my-10 p-3 space-x-10">
          <img src="https://www.sahyadri.edu.in/images/home/nba.jpg"/>
          <img src="https://www.sahyadri.edu.in/images/home/nba.jpg"/>
          <img src="https://www.sahyadri.edu.in/images/home/nba.jpg"/>
          <img src="https://www.sahyadri.edu.in/images/home/nba.jpg"/>
        </div>
     </section>
     <section id="Promotion">
      <div className="h-[300px] w-full">
        <img src="https://www.sahyadri.edu.in/images/banners/home1.jpg" />
      </div>
     </section>
     <section id="Partners">
        <div className="h-[100px] flex flex-row shadow-md mx-10 my-10 p-3 space-x-10">
          <img src="https://www.sahyadri.edu.in/images/home/nba.jpg"/>
          <img src="https://www.sahyadri.edu.in/images/home/nba.jpg"/>
          <img src="https://www.sahyadri.edu.in/images/home/nba.jpg"/>
          <img src="https://www.sahyadri.edu.in/images/home/nba.jpg"/>
        </div>
     </section>
     <section id="Promotion">
      <div className="h-[300px] w-full">
        <img src="https://www.sahyadri.edu.in/images/banners/home1.jpg" />
      </div>
     </section>
     
   
    
   </div>
     );
}