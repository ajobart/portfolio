import Navbar from "../../molecules/navbar/navbar";
import { useTheme } from "../../context/theme/themeContext";

export default function Home() {
    const { isDarkMode } = useTheme();

    return (
        <div className={`relative w-full h-fit flex flex-col items-start justify-start ${isDarkMode ? 'dark bg-home-dark text-primary-dark' : 'bg-home-light text-primary-light'}`}>
            <Navbar />
            <div className="mt-[64px] w-full flex flex-col px-[246px] box-border text-primary-light bg-home-light dark:bg-home-dark dark:text-primary-dark overflow-scroll">
                {/* CONTENT CONTAINER */}
                <div className="w-full h-full">
                    <div className="h-[120px] w-full bg-red-500 dark:bg-blue-700">
                        Home test
                    </div>
                    <div className="h-[520px] mb-[24px] rounded-xl w-full bg-[radial-gradient(100%_100%_at_50%_0%,_rgba(0,0,0,0.00)_0%,_rgba(0,0,0,0.00)_55%,_rgba(136,42,255,0.3)_66%,_rgba(162,88,255,_0.7)_80%,_#E0C8FF_100%)]">
                        Home test
                        <h1 className="bg-gradient-to-r from-[rgba(255,_255,_255,_0.40)] via-[#fff] to-[rgba(255,_255,_255,_0.40)] bg-clip-text text-center text-xl font-medium !leading-normal text-transparent xs:text-2xl sm:text-4xl md:text-5xl lg:text-[56px]">
                            Hello World Little Test
                        </h1>
                    </div>
                    <div className="h-[120px] w-full bg-blue-500">
                        Home test
                    </div>
                    <div className="h-[120px] w-full bg-green-500">
                        Home test
                    </div>
                    <div className="h-[120px] w-full bg-yellow-500">
                        Home test
                    </div>
                    <div className="h-[120px] w-full bg-purple-500">
                        Home test
                    </div>
                    <div className="h-[120px] w-full bg-orange-500">
                        Home test
                    </div>
                    <div className="h-[120px] w-full bg-pink-500">
                        Home test
                    </div>
                    <div className="h-[120px] w-full bg-red-500">
                        Home test
                    </div>
                    <div className="h-[120px] w-full bg-red-500">
                        Home test
                    </div>
                    <div className="h-[120px] w-full bg-red-500">
                        Home test
                    </div>
                    <div className="h-[120px] w-full bg-red-500">
                        Home test
                    </div>
                    <div className="h-[120px] w-full bg-red-500">
                        Home test
                    </div>
                    <div className="h-[120px] w-full bg-red-500">
                        Home test
                    </div>
                </div>
            </div>
        </div>
    )
}
