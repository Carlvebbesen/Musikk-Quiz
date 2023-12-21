// Define the interface for a snowflake
interface Snowflake {
    element: JSX.Element;
    size: number;
    speed: number;
}

// Function to create a snowflake
function createSnowflake(): Snowflake {
    const size = Math.random() * 24 + 12; // Random size between 12 and 36
    const speed = Math.random() * 5 + 5; // Random speed between 5 and 10 seconds

    const snowflakeElement = (
        <div
            className="snowflake absolute text-white opacity-50"
            style={{
                fontSize: `${size}px`,
                animationDuration: `${speed}s`,
                left: `${Math.random() * 100}%`,
                zIndex: 1,
            }}
        >
            ❄
        </div>
    );

    return {
        element: snowflakeElement,
        size,
        speed,
    };
}

// Function to add snowflakes to the container
function Snowfall({ count }: { count: number }) {
    const snowflakes = [];

    for (let i = 0; i < count; i++) {
        snowflakes.push(createSnowflake().element);
    }

    return <div id="snowfall-container" className="relative h-screen w-screen overflow-hidden">{snowflakes}</div>;
}

export default Snowfall;
