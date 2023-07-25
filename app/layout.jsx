import '@styles/globals.css';

export const metadata = {
    title: 'CareerUp',
}
const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
          {children}
        </body>
    </html>
  )
}

export default RootLayout;