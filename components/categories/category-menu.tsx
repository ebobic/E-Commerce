import CategoryLink from './category-link';

type CategoryMenuProps = {
    setMenuOpen: (open: boolean) => void;
}

// BYTAS TILL RENDERLINK!?
const categoryArray = ["beauty", "fragrances", "furniture", "groceries", "home-decoration", "kitchen-accessories", "laptops", "mens-shirts", "mens-shoes", "mens-watches", "mobile-accessories", "motorcycle", "skin-care", "smartphones", "sports-accessories", "sunglasses", "tablets", "tops", "vehicle", "womens-bags", "womens-dresses", "womens-jewellery", "womens-shoes", "womens-watches"]

export default function CategoryMenu({setMenuOpen}: CategoryMenuProps) {
    return (
        <ul className="flex flex-col absolute top-10 w-[30vw] pb-3 border rounded-sm bg-blue-50 text-neutral-800 z-45">
            <h2 className="text-xl p-4">Categories</h2>
            {/* {categoryArray.map((category) => ( */}
                <li
                    // {/* key={category} */}
                    // {/* // type="button" */}
                    // {/* // className="px-8 text-start cursor-pointer hover:text-blue-900" */}
                    onClick={() => setMenuOpen(false)}
                >
                    {/* {formatString(category)} */}
                    <CategoryLink {...categoryArray} />
                </li>
            {/* ))} */}
        </ul>
    )
}

