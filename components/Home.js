import { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import Courses from "./Courses"
import Profile from "./Subjects"
const Home = ({router}) =>{
    const { student } = router.params;

    const [index , setIndex] = useState(0);
    const [routes] = useState([
        {
            key:"profile",
            title:"Profile",
            focusedIcon: "account",
            unfocusedIcon:"acount-outline"
        },
        {
            key:"courses",
            title:"Courses",
            focusedIcon:"school",
            unfocusedIcon:"school-outline",
        },
        {
            key:"subjects",
            title:"Subjects",
            focusedIcon:"book-open",
            unfocusedIcon:"book-open-outline"
        },
    ]);
    
    const renderScence = BottomNavigation.SceneMap({
        profile:() => <Profile student={student}/>,
        courses:() => <Courses student={student}/>,
        subjects:() => <Subjects student={student}/>
    });

    return(
        <BottomNavigation
            navigationState={{ index,routes}}
            onIndexChange={setIndex}
            renderScene={renderScence}
        />
    );
};

export default Home;