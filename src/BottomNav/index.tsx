import { useState } from "react";
import { Flash, LogoBitcoin, People, PersonCircle, Settings } from "react-ionicons";


const BottomNav = () => {
    const [navItems, setNavItems] = useState([
		{ title: "Enerji", icon: Flash, active: false },
		{ title: "Arkadaşlar", icon: People, active: false },
		{ title: "Para", icon: LogoBitcoin, active: true },
		{ title: "Ayarlar", icon: Settings, active: false },
		{ title: "Profil", icon: PersonCircle, active: false },
	]);
    const handleActive = (title: string) => {
		setNavItems((prevItems) =>
			prevItems.map((item) => {
				return { ...item, active: item.title === title ? true : false };
			})
		);
	};
    return (
		<div className="w-full my-0 mx-auto rounded-2xl bg-[#012237] flex items-center justify-between p-2">
			{navItems.map((item) => (
				<div
					key={item.title}
					className={`flex flex-col gap-2 cursor-pointer rounded-xl items-center w-full py-[6px] ${
						item.active ? "bg-[#003e65]" : "bg-transparent"
					}`}
					onClick={() => handleActive(item.title)}
				>
					<item.icon
						cssClasses={
							item.active
								? "!text-[#fdb224] !fill-[#fdb224]"
								: "!text-[#818288] !fill-[#818288]"
						}
					/>
					<span
						className={`text-sm font-medium ${
							item.active ? "text-[#fdb224]" : "text-[#818288]"
						}`}
					>
						{item.title}
					</span>
				</div>
			))}
		</div>
	);
};

export default BottomNav