function MyClockTime() {
    const currentTime = new Date();
    return (
        <div>
            <p>현재 시간 : {currentTime.toLocaleTimeString()}</p>
        </div>
    );
}

export default MyClockTime;