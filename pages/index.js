import MeetupList from '../components/meetups/MeetupList'

function HomePage() {
    const dummy_meetups = [
        {
            id: 'm1',
            title: 'first meet up',
            image : 'https://upload.wikimedia.org/wikipedia/commons/8/8b/PanoStanislasCrepuscule.jpg',
            address : 'some address 5, 12345 sime city'
        },
        {
            id: 'm1',
            title: 'first meet up',
            image : 'https://upload.wikimedia.org/wikipedia/commons/8/8b/PanoStanislasCrepuscule.jpg',
            address : 'some address 5, 12345 sime city'
        }
    ]

  return <MeetupList meetups={dummy_meetups} />;
}

export default HomePage;
