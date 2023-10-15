import React, { useLayoutEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import HomeBg from '../../assets/images/home.png'
import AboutBg from '../../assets/images/about.png'
import { useRef } from 'react'
import { gsap } from 'gsap'

export const MainLayout = () => {

    const container = useRef();
    const tl = useRef();
    let logo = useRef(null)
    let menu1 = useRef(null)
    let menu2 = useRef(null)
    let menu3 = useRef(null)
    let menu4 = useRef(null)
    
    const { pathname } = useLocation()
    const activePath = pathname.split('/').splice(-1)[0]
    const [scrollClass, setscrollClass] = useState(false)

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            const boxes = self.selector('.menuItem');
            tl.current = gsap
            .timeline({ defaults: {
                duration: .4, ease: "power1.inOut", stagger: { amount: .4 } },
            })
            .fromTo(logo.current, { y: -100}, { y: 0 })
            boxes.forEach( box => {
                tl.current.fromTo( box, { y: -100 },  { y: 0 })
            })
        }, container);
        return () => ctx.revert();
    }, [])

    const scrollFunc = () => {
        setscrollClass(true)
    }

    const routeBg = {
        'work': HomeBg,
        'about': AboutBg,
        'gallery': HomeBg,
        'contact': HomeBg,
    }

    return (
        <div className='h-[100dvh] overflow-y-auto py-3 px-7 lg:px-20 flex items-center justify-start flex-col'
            onScroll={scrollFunc}
            style={{
                backgroundImage : `url(${routeBg[activePath]})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                objectFit: "contain",
            }}
        >
            <nav ref={container}
                className={`w-full flex items-center justify-between fixed top-0 left-0 z-10 px-7 lg:px-20 py-4 ${scrollClass && 'bg-black bg-opacity-10 backdrop-blur-lg'} `}>
                <svg ref={logo} width="67" height="58" viewBox="0 0 67 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_265_5260)">
                    <path d="M3.44448 52.8125C3.28435 52.9124 3.24876 53.057 3.18115 53.1783C2.78082 53.8868 2.3876 54.597 1.94278 55.2786C1.77197 55.5409 1.59405 55.8015 1.36452 56.0174C1.13678 56.2315 0.875225 56.3814 0.553178 56.2779C0.213338 56.1691 0.0781143 55.8907 0.0318534 55.5606C-0.0357587 55.0752 0.0105022 54.5916 0.0852313 54.1116C0.286288 52.8107 0.66883 51.5545 1.0229 50.2929C1.69547 47.9053 2.52994 45.5659 3.2025 43.1783C4.26828 39.3899 5.38388 35.6175 6.52795 31.8524C7.18806 29.6825 8.02965 27.575 8.78762 25.439C9.09365 24.5789 9.38723 23.7153 9.69148 22.8552C9.75376 22.6803 9.81781 22.5054 9.90677 22.3448C10.0758 22.0397 10.3747 21.9148 10.6576 22.0093C10.9476 22.1057 11.106 22.368 11.0811 22.7195C11.0651 22.9497 10.985 23.1657 10.9138 23.3816C10.574 24.4094 10.2039 25.4283 9.90322 26.4705C8.50115 31.3224 7.30905 36.226 6.31444 41.1779C6.03331 42.5751 5.81269 43.9848 5.60807 45.4534C5.78244 45.341 5.80557 45.1876 5.85717 45.0609C6.40874 43.6851 6.94964 42.3039 7.5101 40.9316C8.34636 38.8867 9.19507 36.847 10.0402 34.8056C10.0918 34.6825 10.1149 34.4844 10.3071 34.5433C10.485 34.5968 10.4423 34.7878 10.4085 34.9163C10.3142 35.2732 10.2075 35.63 10.0829 35.978C8.54208 40.225 7.07418 44.5005 5.32339 48.669C5.2451 48.8546 5.18105 49.0402 5.16859 49.2436C5.06184 51.0584 5.08141 52.8661 5.41947 54.6594C5.49064 55.0377 5.58138 55.4125 5.73618 55.7676C6.09737 56.5991 6.59556 56.7794 7.41047 56.3689C7.7681 56.1869 8.08303 55.9407 8.38372 55.6766C8.89971 55.2233 9.35164 54.7112 9.77333 54.1705C10.7128 52.9642 11.5241 51.674 12.2696 50.341C14.1699 46.9381 15.8033 43.4049 17.3263 39.8217C20.6731 31.9469 24.1836 24.1453 27.5731 16.2902C29.4822 11.8629 31.2224 7.37148 32.7561 2.79971C33.0426 1.94675 33.361 1.10805 33.7774 0.30862C33.845 0.178355 33.8806 -0.0429165 34.0781 0.00704808C34.2702 0.0570127 34.2026 0.269362 34.208 0.415687C34.2471 1.3668 34.0656 2.28936 33.8201 3.20122C32.6458 7.55884 31.1298 11.8005 29.468 15.9904C26.8863 22.5001 24.1302 28.9348 21.2798 35.3303C19.5611 39.1865 17.8547 43.0462 15.9296 46.8025C14.7126 49.1758 13.4279 51.5117 11.8782 53.6905C11.3498 54.4346 10.7911 55.1573 10.1683 55.8247C9.70038 56.3261 9.20574 56.7954 8.65417 57.2058C8.27519 57.4878 7.86952 57.7215 7.4158 57.8643C6.33223 58.2051 5.37499 57.9 4.69353 56.9899C4.35547 56.5384 4.14373 56.0245 3.98182 55.491C3.76653 54.779 3.63131 54.0509 3.54056 53.3139C3.52099 53.1516 3.51565 52.9838 3.44626 52.8143L3.44448 52.8125ZM4.04765 44.3863C3.89998 44.5487 3.8804 44.7111 3.83236 44.8574C3.45872 45.9941 3.08685 47.1308 2.71854 48.2693C2.1474 50.0306 1.58871 51.7954 1.19905 53.6084C1.13144 53.9207 1.04426 54.2365 1.07272 54.6184C1.2382 54.4863 1.29869 54.34 1.37698 54.2115C2.01929 53.1516 2.6278 52.072 3.2025 50.9745C3.33239 50.7283 3.4 50.4802 3.4089 50.2019C3.4516 48.876 3.58505 47.5573 3.77899 46.2457C3.86795 45.6426 3.95335 45.0395 4.04588 44.3881L4.04765 44.3863Z" fill="white"/>
                    <path d="M28.8686 52.5127C28.6907 52.6875 28.5591 52.8125 28.4309 52.9427C27.5787 53.8064 26.6606 54.5933 25.6766 55.3053C25.3066 55.573 24.9258 55.821 24.5059 56.0066C24.3244 56.0869 24.1376 56.1654 23.9454 56.2118C23.1536 56.4046 22.5273 55.9691 22.4117 55.1554C22.3637 54.8128 22.3921 54.472 22.4633 54.1347C22.6786 53.1337 23.1198 52.2236 23.5789 51.3207C23.7123 51.0583 23.8511 50.7996 23.9365 50.5016C23.8244 50.6015 23.7123 50.6997 23.602 50.8032C22.1128 52.1932 20.6075 53.5655 18.9973 54.8182C18.3212 55.3428 17.6308 55.8442 16.8711 56.2439C16.581 56.3974 16.2857 56.5366 15.9547 56.583C15.3071 56.6758 14.8391 56.2957 14.7964 55.6426C14.7786 55.3678 14.8338 55.1019 14.9139 54.8432C15.042 54.4327 15.2252 54.0473 15.4441 53.6779C16.3106 52.2075 17.3604 50.8817 18.5667 49.679C19.0008 49.2453 19.483 48.8652 20.0221 48.5672C20.483 48.3121 20.9705 48.1747 21.4971 48.255C21.942 48.3228 22.3014 48.5316 22.5149 48.9473C22.6537 49.2168 22.6537 49.3649 22.5256 49.7146C22.4277 49.7093 22.4348 49.6236 22.4117 49.5612C22.2213 49.0437 21.7676 48.7921 21.2285 48.9045C20.9153 48.9687 20.6413 49.1169 20.3851 49.3007C19.9545 49.6094 19.5631 49.9627 19.2072 50.3535C18.1486 51.5134 17.1949 52.7571 16.3996 54.1151C16.1967 54.4595 16.0117 54.8128 15.9014 55.2C15.8747 55.2946 15.8231 55.3856 15.8871 55.5141C16.0811 55.5052 16.2448 55.3963 16.4138 55.3053C17.154 54.902 17.8265 54.3988 18.4866 53.876C20.2321 52.4948 21.853 50.9745 23.4348 49.4113C24.4169 48.4388 25.3848 47.452 26.3599 46.4723C26.4702 46.3617 26.5805 46.2457 26.7086 46.1582C26.9381 46.0012 27.1855 45.978 27.4292 46.1368C27.6587 46.2867 27.7566 46.5597 27.6837 46.8524C27.6321 47.063 27.5306 47.2521 27.4185 47.4341C27.1339 47.8945 26.8438 48.3513 26.5556 48.8117C25.8065 50.0073 25.0486 51.1975 24.4294 52.4698C24.1358 53.073 23.8476 53.6779 23.6768 54.3292C23.6305 54.5077 23.5931 54.6915 23.5789 54.8753C23.5611 55.1055 23.6376 55.1572 23.8636 55.0787C24.2159 54.9556 24.5361 54.77 24.8422 54.5594C25.6535 54.0027 26.4257 53.3942 27.1285 52.7036C27.6872 52.154 28.2246 51.583 28.769 51.0191C28.8669 50.9174 28.9701 50.8246 28.9629 50.6568C28.9327 50.0216 29.2743 49.5737 29.7387 49.2079C30.5554 48.5655 31.4984 48.2978 32.5286 48.3174C33.2314 48.3317 33.8791 48.528 34.4413 48.9527C34.6299 49.0954 34.8043 49.1293 35.032 49.0776C35.6726 48.9348 36.3202 48.8492 36.9785 48.8599C37.3362 48.8652 37.6885 48.9081 38.0301 49.0151C39.1866 49.3774 39.8734 50.1483 40.0531 51.3599C40.0709 51.483 40.0495 51.6169 40.1278 51.7507C40.2862 51.699 40.3645 51.5562 40.4641 51.4456C40.9908 50.8656 41.5121 50.2803 42.1188 49.7771C42.3822 49.5576 42.6562 49.3524 42.9729 49.2168C43.7131 48.9009 44.302 49.3042 44.2806 50.1108C44.27 50.5159 44.1419 50.8959 44.012 51.2725C43.9621 51.417 43.9106 51.5616 43.8518 51.7293C44.0244 51.7025 44.092 51.5865 44.1774 51.5044C44.802 50.9209 45.4514 50.3642 46.1151 49.8253C46.5581 49.4666 47.0207 49.1347 47.5118 48.8438C47.7822 48.6832 48.0616 48.5423 48.3676 48.4655C49.1558 48.2675 49.6949 48.7421 49.6095 49.5505C49.5668 49.952 49.4387 50.3321 49.2786 50.6961C49.0081 51.3082 48.7235 51.9149 48.437 52.5198C48.179 53.0605 47.9299 53.6047 47.7342 54.1722C47.6559 54.397 47.558 54.6219 47.5883 54.8949C47.7538 54.952 47.8925 54.8628 48.0295 54.8092C48.4406 54.6451 48.8231 54.422 49.1825 54.1668C49.8088 53.7207 50.4333 53.2675 51.0063 52.7536C52.4279 51.4813 53.8851 50.2446 55.1413 48.7974C55.3174 48.594 55.5096 48.3977 55.7142 48.2228C56.0789 47.9123 56.5327 47.9088 56.8405 48.1925C57.1501 48.478 57.1821 48.9224 56.9099 49.3203C56.8227 49.4488 56.7141 49.5647 56.6127 49.6843C55.7391 50.705 54.9687 51.7989 54.2926 52.9606C54.0346 53.4049 53.8104 53.8671 53.6431 54.3542C53.5595 54.5987 53.4937 54.8449 53.4937 55.1055C53.4937 55.5819 53.7018 55.7836 54.1805 55.7604C54.4812 55.7461 54.7712 55.6747 55.0576 55.5837C55.8868 55.3178 56.6875 54.9806 57.4365 54.538C60.0734 52.9748 62.6444 51.3171 64.9486 49.2775C65.4183 48.8617 65.9183 48.4816 66.477 48.1907C66.5659 48.1443 66.6531 48.0944 66.7474 48.0658C66.9271 48.0105 67.0339 48.1033 66.9912 48.2799C66.968 48.3745 66.9164 48.4637 66.872 48.553C66.4965 49.3167 65.9806 49.977 65.3934 50.5837C64.6586 51.3438 63.8579 52.0273 63.0199 52.6697C61.2299 54.0384 59.4008 55.3446 57.4276 56.4385C56.7284 56.8257 56.0042 57.154 55.2302 57.3664C54.8441 57.4717 54.4509 57.5288 54.0506 57.5216C52.7321 57.4966 51.7696 56.5527 51.718 55.2304C51.7037 54.8699 51.7571 54.5184 51.8336 54.1704C51.855 54.0741 51.903 53.9813 51.8674 53.876C51.7322 53.8474 51.6699 53.9616 51.5863 54.0241C51.0614 54.4149 50.5454 54.82 50.0152 55.2036C49.5063 55.573 48.9565 55.871 48.3641 56.0869C48.0669 56.194 47.7627 56.2564 47.4442 56.2404C46.7769 56.2065 46.3001 55.7532 46.2378 55.0841C46.2005 54.6933 46.2788 54.3185 46.3962 53.9474C46.6079 53.28 46.8962 52.6429 47.1986 52.013C47.4513 51.4866 47.7057 50.9602 47.9513 50.4302C48.0082 50.3071 48.0918 50.1857 48.0669 50.0162C47.8854 50.0608 47.7538 50.1697 47.6168 50.2643C46.3713 51.1244 45.2041 52.079 44.1579 53.1765C43.3714 54.0009 42.6135 54.8539 41.8982 55.7425C41.827 55.8317 41.7523 55.921 41.6669 55.9923C41.4463 56.1744 41.174 56.1922 40.9534 56.0512C40.7346 55.912 40.6296 55.6533 40.7061 55.3785C40.7435 55.2429 40.8164 55.1162 40.8805 54.9895C41.4658 53.8314 42.053 52.675 42.5636 51.4813C42.6241 51.3385 42.674 51.1922 42.7469 50.9994C42.5476 51.0423 42.4587 51.1725 42.359 51.2743C41.5335 52.1022 40.7755 52.9927 40.0335 53.8956C39.6261 54.3917 39.2204 54.8878 38.813 55.3821C38.7596 55.4481 38.7062 55.5159 38.6439 55.5748C38.3699 55.8407 38.0016 55.9013 37.7063 55.7354C37.418 55.573 37.2863 55.2643 37.3451 54.8896C37.3735 54.704 37.4429 54.5327 37.5177 54.3631C37.7312 53.8653 37.9482 53.3692 38.1617 52.8713C38.2916 52.5698 38.3966 52.2575 38.4464 51.9327C38.5425 51.2903 38.2329 50.7782 37.6191 50.564C37.4999 50.523 37.3717 50.498 37.2472 50.4766C36.7632 50.3945 36.2828 50.4659 35.8007 50.5105C35.6441 50.5248 35.5409 50.573 35.5533 50.7746C35.6174 51.7329 35.2687 52.5698 34.726 53.3264C33.9911 54.3506 33.0161 55.0698 31.8293 55.4927C31.3827 55.6515 30.9201 55.714 30.4433 55.6462C29.7227 55.5409 29.2494 55.1412 29.0128 54.4631C28.8509 53.9991 28.8153 53.5155 28.8651 53.0266C28.8793 52.8856 28.9274 52.7464 28.8775 52.5198L28.8686 52.5127ZM30.2227 53.4156C30.2333 53.5084 30.244 53.6494 30.2707 53.7885C30.3454 54.1883 30.4735 54.2811 30.8881 54.2561C31.0749 54.2454 31.2511 54.19 31.4219 54.1187C32.1994 53.7993 32.8524 53.3085 33.3684 52.6429C33.6762 52.245 33.8968 51.8007 33.968 51.2939C34.0196 50.9281 33.9751 50.8888 33.6246 50.9745C32.6745 51.2064 31.7457 51.5259 30.7742 51.665C30.6479 51.6829 30.5714 51.7382 30.5305 51.8631C30.3721 52.3521 30.244 52.8464 30.2244 53.412L30.2227 53.4156Z" fill="white"/>
                    <path d="M58.2212 43.1175C58.1554 42.493 58.7034 41.9523 59.2834 41.8452C59.7745 41.7542 60.1909 42.1843 60.141 42.7017C60.0645 43.5119 59.2247 44.0205 58.481 43.7082C58.1963 43.5886 58.2248 43.3317 58.2212 43.1175Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_265_5260">
                    <rect width="67" height="58" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>

                <ul className='flex items-center justify-between space-x-5 font-normal text-xl'>
                    <li ref={ menu1 } className='hover:text-nao-main menuItem'>
                        <NavLink
                            style={({ isActive }) => {
                                return {
                                color: isActive ? '#CCFF00' : "#FFFFFF",
                                textDecoration: 'none',
                                };
                            }}
                            to='/work'
                        >
                            Work
                        </NavLink>
                    </li>
                    <li ref={ menu2 } className='hover:text-nao-main menuItem'>
                        <NavLink  
                            style={({ isActive }) => {
                                return {
                                color: isActive ? '#CCFF00' : "#FFFFFF",
                                textDecoration: 'none',
                                };
                            }}
                            to='/about'
                        >
                            About
                        </NavLink>
                    </li>
                    <li ref={ menu3 } className='hover:text-nao-main menuItem'>
                        <NavLink  
                            style={({ isActive }) => {
                                return {
                                color: isActive ? '#CCFF00' : "#FFFFFF",
                                textDecoration: 'none',
                                };
                            }}
                            to='/gallery'
                        >
                            Gallery
                        </NavLink>
                    </li>
                    <li ref={ menu4 } className='hover:text-nao-main menuItem'>
                        <NavLink  
                            style={({ isActive }) => {
                                return {
                                color: isActive ? '#CCFF00' : "#FFFFFF",
                                textDecoration: 'none',
                                };
                            }}
                            to='/contact'
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}