export default function NavBar() {
  const links = ['Collections', 'Men', 'Women', 'About', 'Contact']

  return (
    <div className="flex gap-6 text-dark-grayish-blue text-sm font-medium">
      {links.map((link) => {
        return (
          <a className="cursor-pointer">{link}</a>
        )
      })}
    </div>
  )
}