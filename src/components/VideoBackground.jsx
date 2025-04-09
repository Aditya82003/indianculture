const VideoBackground = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
            >
                <source src="/backgroundVideo.mp4" type="video/mp4" />
            </video>
            <div className="flex flex-col gap-6 items-center justify-center h-full text-white z-10 relative p-4 text-center">
                <h1 className="text-5xl font-bold">Welcome to the site</h1>
                <p className="text-lg max-w-[1200px] text-center tracking-tighter">India is a country dotted with stunning wildlife diversity, and rich traditions. While the Western coast greets you with mouth-watering delicacies, the East part invites you to experience its greenery.</p>
                <button className="px-10 py-3 text-lg font-medium text-green-600 bg-white">Read More</button>
            </div>
        </div>
    );
};

export default VideoBackground;
