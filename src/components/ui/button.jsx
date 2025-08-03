export function Button({ className = "", children, ...props }) {
  return (
    <button className={`inline-flex items-center justify-center rounded-md text-sm font-medium ${className}`} {...props}>
      {children}
    </button>
  )
}