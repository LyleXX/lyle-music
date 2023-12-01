import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "@/router";
import wallpaper from '@/assets/images/wallpaper.jpg'

function App() {
  return <div style={{backgroundImage:`url(${wallpaper})`}} className='h-[100vh] w-[100vw]'>{useRoutes(routes)}</div>;
}

export default App;
