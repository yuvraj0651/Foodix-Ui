import Breadcrumb from "../../UI/Breadcrumb/Breadcrumb";
// Beef Menu
import FoodProduct1 from "../../../assets/Menu-Page/food-products/beef/product-1.jpg";
import FoodProduct2 from "../../../assets/Menu-Page/food-products/beef/product-2.jpg";
import FoodProduct3 from "../../../assets/Menu-Page/food-products/beef/product-3.jpg";
import FoodProduct4 from "../../../assets/Menu-Page/food-products/beef/product-4.jpg";
import FoodProduct5 from "../../../assets/Menu-Page/food-products/beef/product-5.jpg";
import FoodProduct6 from "../../../assets/Menu-Page/food-products/beef/product-6.jpg";
// Grilled Menu
import GrilledProduct1 from "../../../assets/Menu-Page/food-products/grilled/product-1.jpg";
import GrilledProduct2 from "../../../assets/Menu-Page/food-products/grilled/product-2.jpg";
import GrilledProduct3 from "../../../assets/Menu-Page/food-products/grilled/product-3.jpg";
import GrilledProduct4 from "../../../assets/Menu-Page/food-products/grilled/product-4.jpg";
import GrilledProduct5 from "../../../assets/Menu-Page/food-products/grilled/product-5.jpg";
import GrilledProduct6 from "../../../assets/Menu-Page/food-products/grilled/product-6.jpg";
// Sizzling Menu
import SizzlingProduct1 from "../../../assets/Menu-Page/food-products/sizzling/product-1.jpg";
import SizzlingProduct2 from "../../../assets/Menu-Page/food-products/sizzling/product-2.jpg";
import SizzlingProduct3 from "../../../assets/Menu-Page/food-products/sizzling/product-3.jpg";
import SizzlingProduct4 from "../../../assets/Menu-Page/food-products/sizzling/product-4.jpg";
import SizzlingProduct5 from "../../../assets/Menu-Page/food-products/sizzling/product-5.jpg";
import SizzlingProduct6 from "../../../assets/Menu-Page/food-products/sizzling/product-6.jpg";
// Steak Bliss
import { FaStar } from "react-icons/fa";
import { FaCartFlatbed } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { useState } from "react";

const Menu = () => {

    const [activeTab, setActiveTab] = useState("beef");

    const navTabs = [
        { id: "beef", label: "beef" },
        { id: "grilled", label: "grilled" },
        { id: "sizzling", label: "sizzling" },
        { id: "steak", label: "steak bliss" },
    ];

    const BeefMenu = [
        {
            id: 1,
            MenuProductImg: FoodProduct1,
            FoodPrice: "18.00",
            Rating: "4.7",
            TotalConsumers: 375,
            ProductTitle: "beefy bourbon bliss",
            ProductMeta1: "4 piece chicken",
            ProductMeta2: "spicy sauce",
            cardAddBtn: "add to cart",
        },
        {
            id: 2,
            MenuProductImg: FoodProduct2,
            FoodPrice: "18.00",
            Rating: "4.7",
            TotalConsumers: 375,
            ProductTitle: "smoked paprika sirloin",
            ProductMeta1: "4 piece chicken",
            ProductMeta2: "spicy sauce",
            cardAddBtn: "add to cart",
        },
        {
            id: 3,
            MenuProductImg: FoodProduct3,
            FoodPrice: "18.00",
            Rating: "4.7",
            TotalConsumers: 375,
            ProductTitle: "thai basil beef stir-fry",
            ProductMeta1: "4 piece chicken",
            ProductMeta2: "spicy sauce",
            cardAddBtn: "add to cart",
        },
        {
            id: 4,
            MenuProductImg: FoodProduct4,
            FoodPrice: "18.00",
            Rating: "4.7",
            TotalConsumers: 375,
            ProductTitle: "korean BBQ Beef",
            ProductMeta1: "4 piece chicken",
            ProductMeta2: "spicy sauce",
            cardAddBtn: "add to cart",
        },
        {
            id: 5,
            MenuProductImg: FoodProduct5,
            FoodPrice: "18.00",
            Rating: "4.7",
            TotalConsumers: 375,
            ProductTitle: "beef bourguignon",
            ProductMeta1: "4 piece chicken",
            ProductMeta2: "spicy sauce",
            cardAddBtn: "add to cart",
        },
        {
            id: 6,
            MenuProductImg: FoodProduct6,
            FoodPrice: "18.00",
            Rating: "4.7",
            TotalConsumers: 375,
            ProductTitle: "beef wellington",
            ProductMeta1: "4 piece chicken",
            ProductMeta2: "spicy sauce",
            cardAddBtn: "add to cart",
        },
    ]

    const GrilledMenu = [
        {
            id: 1,
            MenuProductImg: GrilledProduct1,
            FoodPrice: "18.00",
            Rating: "4.7",
            TotalConsumers: 375,
            ProductTitle: "beefy bourbon bliss",
            ProductMeta1: "4 piece chicken",
            ProductMeta2: "spicy sauce",
            cardAddBtn: "add to cart",
        },
        {
            id: 2,
            MenuProductImg: GrilledProduct2,
            FoodPrice: "18.00",
            Rating: "4.7",
            TotalConsumers: 375,
            ProductTitle: "smoked paprika sirloin",
            ProductMeta1: "4 piece chicken",
            ProductMeta2: "spicy sauce",
            cardAddBtn: "add to cart",
        },
        {
            id: 3,
            MenuProductImg: GrilledProduct3,
            FoodPrice: "18.00",
            Rating: "4.7",
            TotalConsumers: 375,
            ProductTitle: "thai basil beef stir-fry",
            ProductMeta1: "4 piece chicken",
            ProductMeta2: "spicy sauce",
            cardAddBtn: "add to cart",
        },
        {
            id: 4,
            MenuProductImg: GrilledProduct4,
            FoodPrice: "18.00",
            Rating: "4.7",
            TotalConsumers: 375,
            ProductTitle: "korean BBQ Beef",
            ProductMeta1: "4 piece chicken",
            ProductMeta2: "spicy sauce",
            cardAddBtn: "add to cart",
        },
        {
            id: 5,
            MenuProductImg: GrilledProduct5,
            FoodPrice: "18.00",
            Rating: "4.7",
            TotalConsumers: 375,
            ProductTitle: "beef bourguignon",
            ProductMeta1: "4 piece chicken",
            ProductMeta2: "spicy sauce",
            cardAddBtn: "add to cart",
        },
        {
            id: 6,
            MenuProductImg: GrilledProduct6,
            FoodPrice: "18.00",
            Rating: "4.7",
            TotalConsumers: 375,
            ProductTitle: "beef wellington",
            ProductMeta1: "4 piece chicken",
            ProductMeta2: "spicy sauce",
            cardAddBtn: "add to cart",
        },
    ]

    const SizzlingMenu = [
        {
            id: 1,
            MenuProductImg: SizzlingProduct1,
            FoodPrice: "18.00",
            Rating: "4.7",
            TotalConsumers: 375,
            ProductTitle: "beefy bourbon bliss",
            ProductMeta1: "4 piece chicken",
            ProductMeta2: "spicy sauce",
            cardAddBtn: "add to cart",
        },
        {
            id: 2,
            MenuProductImg: SizzlingProduct2,
            FoodPrice: "18.00",
            Rating: "4.7",
            TotalConsumers: 375,
            ProductTitle: "smoked paprika sirloin",
            ProductMeta1: "4 piece chicken",
            ProductMeta2: "spicy sauce",
            cardAddBtn: "add to cart",
        },
        {
            id: 3,
            MenuProductImg: SizzlingProduct3,
            FoodPrice: "18.00",
            Rating: "4.7",
            TotalConsumers: 375,
            ProductTitle: "thai basil beef stir-fry",
            ProductMeta1: "4 piece chicken",
            ProductMeta2: "spicy sauce",
            cardAddBtn: "add to cart",
        },
        {
            id: 4,
            MenuProductImg: SizzlingProduct4,
            FoodPrice: "18.00",
            Rating: "4.7",
            TotalConsumers: 375,
            ProductTitle: "korean BBQ Beef",
            ProductMeta1: "4 piece chicken",
            ProductMeta2: "spicy sauce",
            cardAddBtn: "add to cart",
        },
        {
            id: 5,
            MenuProductImg: SizzlingProduct5,
            FoodPrice: "18.00",
            Rating: "4.7",
            TotalConsumers: 375,
            ProductTitle: "beef bourguignon",
            ProductMeta1: "4 piece chicken",
            ProductMeta2: "spicy sauce",
            cardAddBtn: "add to cart",
        },
        {
            id: 6,
            MenuProductImg: SizzlingProduct6,
            FoodPrice: "18.00",
            Rating: "4.7",
            TotalConsumers: 375,
            ProductTitle: "beef wellington",
            ProductMeta1: "4 piece chicken",
            ProductMeta2: "spicy sauce",
            cardAddBtn: "add to cart",
        },
    ]

    return (
        <>
            <div className="menu-page font-poppins content-padding md:!pt-[3.7rem] xxl:!pt-[3.7rem] lg:pt-[4rem]">
                <div className="menu-page__inner">
                    <Breadcrumb />
                    <div className="choose-menu-block section-padding bg-amber-50 pb-4 dark:bg-slate-700">
                        <div className="menu-info text-center">
                            <h4 className="menu-headingText uppercase font-[600] tracking-wide m-0 text-[#222] text-[1.3rem] dark:text-[#ccc]">choose menu</h4>
                            <p className="menu-subtitle m-0 tracking-wide text-[0.85rem] leading-[1.3rem] pt-[0.4rem] font-[500] dark:text-[#ccc]">Indulge in an array of meticulously crafted sushi rolls, artfully blending </p>
                        </div>
                        <div className="menu-tab-block mt-3 flex items-center justify-center gap-3 lg:gap-2 flex-wrap">
                            {
                                navTabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        type="button"
                                        id={tab.id}
                                        className={`nav-tab tab ${activeTab === tab.id ? "bg-red-700 text-white" : ""
                                            }`}
                                        onClick={() => setActiveTab(tab.id)}
                                        data-tab="beef"
                                    >
                                        {tab.label}
                                    </button>
                                ))
                            }
                        </div>
                        <div className="tab-contents mt-4 lg:mt-6">
                            {
                                activeTab === "beef" && (
                                    <div className="tab-content menu-card-block" id="beef">
                                        {
                                            BeefMenu.map((item) => (
                                                <div className="menu_food-card shadow-sm shadow-[#ccc] border-sm rounded-[10px] cursor-pointer" key={item.id}>
                                                    <div className="food-card-thumb">
                                                        <img src={item.MenuProductImg} alt="food-product-1" className="food-image img-fluid w-full object-cover" />
                                                    </div>
                                                    <div className="food-card-details border border-[#ccc] pt-4 pb-3 px-3 bg-[#fff]">
                                                        <div className="food-card__price-review flex items-center justify-between pb-[0.8rem] border-b border-[#ccc]">
                                                            <div className="food-card__price">
                                                                <span className="price text-[1.1rem] font-[600] tracking-wide text-red-700">${item.FoodPrice}</span>
                                                            </div>
                                                            <div className="food-card__reviews flex items-center gap-[0.15rem]">
                                                                <FaStar className="star-icon text-amber-500 text-[1.1rem]" />
                                                                <div className="rating-text font-[500] flex gap-[0.15rem]">
                                                                    <span>{item.Rating}</span>
                                                                    <span>({item.TotalConsumers})</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="food-card__description pt-3 pb-4">
                                                            <h4 className="m-0 capitalize tracking-wide font-[500] text-[1.2rem]">{item.ProductTitle}</h4>
                                                            <div className="food-card__list pt-3">
                                                                <ul className="feature-list pl-0 m-0">
                                                                    <li className="flex items-center gap-2 capitalize tracking-wide text-[0.9rem] mb-1"><FaRegCheckCircle className="text-red-700" />{item.ProductMeta1}</li>
                                                                    <li className="flex items-center gap-2 capitalize tracking-wide text-[0.9rem]"><FaRegCheckCircle className="text-red-700" />{item.ProductMeta2}</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="food-card__add-button border-t flex justify-center">
                                                            <button type="button" className="flex items-center justify-center mt-3 gap-[0.4rem] border flex-1 py-[0.7rem] shadow-sm shadow-[#ccc] rounded-[7px] bg-red-500 hover:bg-red-700 text-white transition-all duration-300">
                                                                <FaCartFlatbed className="cart-icon" />
                                                                <span className="capitalize tracking-wide font-[500] text-[0.85rem]">{item.cardAddBtn}</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                            {
                                activeTab === "grilled" && (
                                    <div className="tab-content menu-card-block" id="beef">
                                        {
                                            GrilledMenu.map((item) => (
                                                <div className="menu_food-card shadow-sm shadow-[#ccc] border-sm rounded-[10px] cursor-pointer" key={item.id}>
                                                    <div className="food-card-thumb">
                                                        <img src={item.MenuProductImg} alt="food-product-1" className="food-image img-fluid w-full object-cover" />
                                                    </div>
                                                    <div className="food-card-details border border-[#ccc] pt-4 pb-3 px-3 bg-[#fff]">
                                                        <div className="food-card__price-review flex items-center justify-between pb-[0.8rem] border-b border-[#ccc]">
                                                            <div className="food-card__price">
                                                                <span className="price text-[1.1rem] font-[600] tracking-wide text-red-700">${item.FoodPrice}</span>
                                                            </div>
                                                            <div className="food-card__reviews flex items-center gap-[0.15rem]">
                                                                <FaStar className="star-icon text-amber-500 text-[1.1rem]" />
                                                                <div className="rating-text font-[500] flex gap-[0.15rem]">
                                                                    <span>{item.Rating}</span>
                                                                    <span>({item.TotalConsumers})</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="food-card__description pt-3 pb-4">
                                                            <h4 className="m-0 capitalize tracking-wide font-[500] text-[1.2rem]">{item.ProductTitle}</h4>
                                                            <div className="food-card__list pt-3">
                                                                <ul className="feature-list pl-0 m-0">
                                                                    <li className="flex items-center gap-2 capitalize tracking-wide text-[0.9rem] mb-1"><FaRegCheckCircle className="text-red-700" />{item.ProductMeta1}</li>
                                                                    <li className="flex items-center gap-2 capitalize tracking-wide text-[0.9rem]"><FaRegCheckCircle className="text-red-700" />{item.ProductMeta2}</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="food-card__add-button border-t flex justify-center">
                                                            <button type="button" className="flex items-center justify-center mt-3 gap-[0.4rem] border flex-1 py-[0.7rem] shadow-sm shadow-[#ccc] rounded-[7px] bg-red-500 hover:bg-red-700 text-white transition-all duration-300">
                                                                <FaCartFlatbed className="cart-icon" />
                                                                <span className="capitalize tracking-wide font-[500] text-[0.85rem]">{item.cardAddBtn}</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                            {
                                activeTab === "sizzling" && (
                                    <div className="tab-content menu-card-block" id="beef">
                                        {
                                            SizzlingMenu.map((item) => (
                                                <div className="menu_food-card shadow-sm shadow-[#ccc] border-sm rounded-[10px] cursor-pointer" key={item.id}>
                                                    <div className="food-card-thumb">
                                                        <img src={item.MenuProductImg} alt="food-product-1" className="food-image img-fluid w-full object-cover" />
                                                    </div>
                                                    <div className="food-card-details border border-[#ccc] pt-4 pb-3 px-3 bg-[#fff]">
                                                        <div className="food-card__price-review flex items-center justify-between pb-[0.8rem] border-b border-[#ccc]">
                                                            <div className="food-card__price">
                                                                <span className="price text-[1.1rem] font-[600] tracking-wide text-red-700">${item.FoodPrice}</span>
                                                            </div>
                                                            <div className="food-card__reviews flex items-center gap-[0.15rem]">
                                                                <FaStar className="star-icon text-amber-500 text-[1.1rem]" />
                                                                <div className="rating-text font-[500] flex gap-[0.15rem]">
                                                                    <span>{item.Rating}</span>
                                                                    <span>({item.TotalConsumers})</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="food-card__description pt-3 pb-4">
                                                            <h4 className="m-0 capitalize tracking-wide font-[500] text-[1.2rem]">{item.ProductTitle}</h4>
                                                            <div className="food-card__list pt-3">
                                                                <ul className="feature-list pl-0 m-0">
                                                                    <li className="flex items-center gap-2 capitalize tracking-wide text-[0.9rem] mb-1"><FaRegCheckCircle className="text-red-700" />{item.ProductMeta1}</li>
                                                                    <li className="flex items-center gap-2 capitalize tracking-wide text-[0.9rem]"><FaRegCheckCircle className="text-red-700" />{item.ProductMeta2}</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="food-card__add-button border-t flex justify-center">
                                                            <button type="button" className="flex items-center justify-center mt-3 gap-[0.4rem] border flex-1 py-[0.7rem] shadow-sm shadow-[#ccc] rounded-[7px] bg-red-500 hover:bg-red-700 text-white transition-all duration-300">
                                                                <FaCartFlatbed className="cart-icon" />
                                                                <span className="capitalize tracking-wide font-[500] text-[0.85rem]">{item.cardAddBtn}</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                            {
                                activeTab === "steak" && (
                                    <div className="tab-content menu-card-block" id="beef">
                                        {
                                            GrilledMenu.map((item) => (
                                                <div className="menu_food-card shadow-sm shadow-[#ccc] border-sm rounded-[10px] cursor-pointer" key={item.id}>
                                                    <div className="food-card-thumb">
                                                        <img src={item.MenuProductImg} alt="food-product-1" className="food-image img-fluid w-full object-cover" />
                                                    </div>
                                                    <div className="food-card-details border border-[#ccc] pt-4 pb-3 px-3 bg-[#fff]">
                                                        <div className="food-card__price-review flex items-center justify-between pb-[0.8rem] border-b border-[#ccc]">
                                                            <div className="food-card__price">
                                                                <span className="price text-[1.1rem] font-[600] tracking-wide text-red-700">${item.FoodPrice}</span>
                                                            </div>
                                                            <div className="food-card__reviews flex items-center gap-[0.15rem]">
                                                                <FaStar className="star-icon text-amber-500 text-[1.1rem]" />
                                                                <div className="rating-text font-[500] flex gap-[0.15rem]">
                                                                    <span>{item.Rating}</span>
                                                                    <span>({item.TotalConsumers})</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="food-card__description pt-3 pb-4">
                                                            <h4 className="m-0 capitalize tracking-wide font-[500] text-[1.2rem]">{item.ProductTitle}</h4>
                                                            <div className="food-card__list pt-3">
                                                                <ul className="feature-list pl-0 m-0">
                                                                    <li className="flex items-center gap-2 capitalize tracking-wide text-[0.9rem] mb-1"><FaRegCheckCircle className="text-red-700" />{item.ProductMeta1}</li>
                                                                    <li className="flex items-center gap-2 capitalize tracking-wide text-[0.9rem]"><FaRegCheckCircle className="text-red-700" />{item.ProductMeta2}</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="food-card__add-button border-t flex justify-center">
                                                            <button type="button" className="flex items-center justify-center mt-3 gap-[0.4rem] border flex-1 py-[0.7rem] shadow-sm shadow-[#ccc] rounded-[7px] bg-red-500 hover:bg-red-700 text-white transition-all duration-300">
                                                                <FaCartFlatbed className="cart-icon" />
                                                                <span className="capitalize tracking-wide font-[500] text-[0.85rem]">{item.cardAddBtn}</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu