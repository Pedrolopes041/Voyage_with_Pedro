import LocationInfo from "./components/location-Info";
import ActivitySection from "./components/activity-section";

const TripDetails = () => {
    return (
        <div className="max-w-6xl px-6 py-10 space-y-8 mx-auto">
            <LocationInfo />
            <ActivitySection />
        </div>
    )
}

export default TripDetails;