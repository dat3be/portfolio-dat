import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Đạt",
  lastName: "Nguyễn",
  initials: "à há", // the example uses first and last, but feel free to use three or more if you like.
  position: "Tui biết mần Web, và máu khởi nghiệp",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "nghiện cà phê đá không đường",
    },
    {
      emoji: "🌎",
      text: "sống ở Sài Gòn, Việt Nam",
    },
    {
      emoji: "💼",
      text: "Enterpreneur tại Wedev.Mobi",
    },
    {
      emoji: "📧",
      text: "hi@wedev.mobi",
    },
  ],
  socials: [
    {
      link: "https://facebook.com/dat.npq",
      icon: "fa fa-facebook",
      label: "facebook",
    },
    {
      link: "https://instagram.com/dat.npq",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/dat3be",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://linkedin.com/in/npqdat/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com/dat.npq",
      icon: "fa fa-twitter",
      label: "twitter",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Ỏ! Chào, tui là Đạt. Tui không phải là kỹ sư chính quy, dù từng là sinh viên Bách Khoa <3 Tuổi trẻ tui đã bỏ dở ngành kỹ thuật để chuyển hướng sang kinh doanh, và bây giờ coding là sở thích của tui!",
  skills: {
    proficientWith: [
      "javascript",
      "html5",
      "css3",
      "git",
      "react",
      "vue",
      "vite",
      "nodejs",
      "mongodb",
    ],
    exposedTo: [
      "figma",
      "php",
      "mysql",
      "laravel",
      "firebase",
      "aws",
      "docker",
      "nginx",
      "apache",
      "c++",
      "c#",
      "python",
      "java",
      "typescript",
    ],
  },
  hobbies: [
    {
      label: "đọc sách (trừ sách self help)",
      emoji: "📖",
    },
    {
      label: "xem kịch (sân khấu)",
      emoji: "🎭",
    },
    {
      label: "và phim (mọi thể loại)",
      emoji: "🎥",
    },
    {
      label: "nấu ăn (rèn tánh kiên nhẫn)",
      emoji: "🌶",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Dự án số 1 - Thần Số Học",
      live: "https://thansohoc.lol", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/dat3be/NumerologyWebApp", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "Dự án số 2 - Iu Truyện",
      live: "https://iutruyen.com",
      source: "https://github.com/dat3be",
      image: mock2,
    },
    {
      title: "Dự án số 3 - TanManDamMy.Net",
      live: "https://tanmandammy.net",
      source: "https://github.com/dat3be",
      image: mock3,
    },
    {
      title: "Dự án số 4 - Đạt's Blog",
      live: "https://blog.dat.pro.vn",
      source: "https://github.com/dat3be",
      image: mock4,
    },
    {
      title: "Dự án số 5 - 3BE.PRO",
      live: "https://3be.pro",
      source: "https://dat3be.github.io",
      image: mock5,
    },
  ],
};
