import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails () {
    const router = useRouter();

    const newsId = router.query.newsId;

    return (<MeetupDetail 
        image =""
        title="hi"
        address=""
        description=""
    />);
}

export default MeetupDetails;