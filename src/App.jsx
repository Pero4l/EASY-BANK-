import { useState } from 'react'
import './index.css'
import Nav from './components/Nav'
import Background from './components/background'
import Hero from './components/hero-section'
import Article1 from './components/article-1'
import Latest from './components/latest'
import Footer from './components/footer'

function App() {

  const [article, setArticle] = useState([

    { image: "/assets/icon-online.svg",
      name: "Online Banking",
      title: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
    },

    { image: "/assets/icon-budgeting.svg",
      name: "Simple Budgeting",
      title: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
    },

    { image: "/assets/icon-onboarding.svg",
      name: "Fast Onboarding",
      title: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
    },

    { image: "/assets/icon-api.svg",
      name: "Open API",
      title: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
    },
  ])


  const [latest, setLatest] = useState([
    {
      image: "/assets/image-currency.jpg",
      author: "By Claire Robinson",
      title: "Receive money in any currency with no fees",
      content: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
    },

    {
      image: "/assets/image-restaurant.jpg",
      author: "By Wilson Hutton",
      title: "Treat yourself without worrying about money",
      content: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
    },

    {
      image: "/assets/image-plane.jpg",
      author: "By Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      content: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
    },

    {
      image: "/assets/image-confetti.jpg",
      author: "By Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      content: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
    },
  ])

  return (
      <div>
        <Nav />
        <Background />
        <Hero />
        <Article1 article = {article} />
        <Latest latest = {latest} />
        <Footer />
      </div>
  )
}

export default App
