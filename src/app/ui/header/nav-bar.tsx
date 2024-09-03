export default function NavBar() {
  const links = ['Collections', 'Men', 'Women', 'About', 'Contact']

  return (
    <div className="hidden sm:flex gap-6 text-dark-grayish-blue text-sm font-medium ">
      {links.map((link) => {
        return (
          <a className="cursor-pointer py-9 hover:text-black border-b-4 border-transparent hover:border-orange">{link}</a>
        )
      })}
    </div>
  )
}