export default function Footer() {
  return (
    <div className="mt-20 sticky bottom-0 left-0 right-0">
        <footer className="z-0 w-full py-2 px-10 bg-white border-t border-gray-200 shadow flex flex-col md:flex-row md:items-center md:justify-between">
            <span className="text-sm text-gray-500 text-center md:text-start">Developed by Yash Barve</span>
            <ul className="flex flex-wrap items-center justify-center text-sm font-medium text-gray-500">
                <li>
                    <a href="https://github.com/waibee-11" className="hover:underline me-4 md:me-6">Github</a>
                </li>
                <li>
                    <a href="https://twitter.com/waibee_11" className="hover:underline me-4 md:me-6">Twitter</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/waibee_11/" className="hover:underline me-4 md:me-6">Instagram</a>
                </li>
                <li>
                    <a href="mailto:yhbarve@uwaterloo.ca" className="hover:underline">Email</a>
                </li>
            </ul>
        </footer>

    </div>
  )
}
