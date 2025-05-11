
const LoginLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <section className="h-screen flex items-center justify-center overflow-y-auto overflow-x-hidden">
      {children}
    </section>
  )
}

export default LoginLayout
