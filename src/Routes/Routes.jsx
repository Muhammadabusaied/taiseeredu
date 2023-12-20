import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import Courses from "../Pages/Courses/Courses";
import Teachers from "../Pages/Teachers/Teachers";
import AboutTaiseerEdu from "../Pages/AboutTaiseerEdu/AboutTaiseerEdu";
import Contact from "../Pages/Contact/Contact";
import FAQ from "../Pages/FAQ/FAQ";
import Profile from "../Pages/Profile/Profile";
import ProfileHome from "../Pages/Profile/ProfileHome";
import Enrollments from './../Pages/Profile/Enrollments/Enrollments';
import Transections from './../Pages/Profile/Transections/Transections';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main> ,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/signup',
            element: <SignUp></SignUp>
        },
        {
            path:'/signin',
            element: <SignIn></SignIn>
        },
        {
            path:'/courses',
            element: <Courses></Courses>
        },
        {
            path:'/teachers',
            element: <Teachers></Teachers>
        },
        {
            path: '/aboutTaiseerEdu',
            element: <AboutTaiseerEdu></AboutTaiseerEdu>
        },
        {
            path: '/faq',
            element: <FAQ></FAQ>
        },
        {
            path:'/contact',
            element: <Contact></Contact>
        },
        {
            path: '/profile',
            element: <Profile></Profile>,
            children:[
                {
                    path:'/profile/',
                    element: <ProfileHome></ProfileHome>
                },
                {
                    path:'/profile/enrollments',
                    element: <Enrollments></Enrollments>
                },
                {
                    path:'/profile/transections',
                    element: <Transections></Transections>
                }
            ]
        }
      ]
    },
  ]);