import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import Prism from "prismjs";

// Prism.manual = true;
// Prism.highlightAll();
const BlogPage = () => {
  const { href } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get("/api/getpost/" + href).then((response) => {
      setPost(response.data.post[0]);
    });
  }, [href]);
  return (
    <div>
      <div className="container">
        <div className="hero mt-6 bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">{post.title}</h1>
              <p className="py-6">{post.desc}</p>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div
          className="bg-base-200 p-5 blog-body"
          dir="auto"
          dangerouslySetInnerHTML={{ __html: post.body }}
        ></div>
        {/* <div className="bg-base-200 p-5 blog-body" id="hhmm">
          <p>
            النهارده معادنا مع مقال جديد بس مش كود هنتكلم عن ازاى تتعلم برمجه من
            التليفون بس انا هنا عامله للناس اللي مش معاها كمبيوتر او لاب بس عايز
            يتعلم و مش معني كده انك هتعرف تشتغل من عليه لا ده انت هتعمله عشان
            تتعلم و هتكون بتجمع فلوس اللاب او الكمبيوتر بس مش هتفضل كده و لو انت
            عندك كمبيوتر فا ممكن تجرب تعمل ده للتجربه و انا متاكد انك مش هتعمل
            ده تاني بس عشان الموضوع يبقي اسهل معاك ممكن تشتري وصله بتخليك توصل
            usb علي التليفون عشان الكيبورد عشان مش هتعرف تكتب على كيبورد
            التليفون صدقني و هتتشل اكتر و تشتري كيبورد ب45 جنيه او مش عارف ممكن
            يكون سعره زاد و الوصله مس عارف ممكن تكون بكام عشان مش هشتريه عشان
            بوست يعني انا مش غني يعني, بس كده الدنيا معاك هتبقي اسهل. اه صحيح
            نسيت شايف الفلوس اللي انت بتحوشها عشان تشتري لاب زود عليه فلوس دكتور
            عظام و دكتور عيون عشان ظهرك و رقبتك ربنا يرحمهم و عينك كمان فا جهز
            عليهم فلوس. كده بقي انت جهزت عشان تكتب كود و يلا نبدا باول برنامج و
            هو
          </p>
          <h3>termux</h3>
          <p>
            و ده لما بحثت عرفت انه ال Terminal بتاع لينكس بس على الاندرويد بس مش
            هتكلم عليه دلوقتي سيبه للاخر
          </p>
          <div className="divider"></div>
          <p>نبدا باللغات و اللي هي اسهل حاجه</p>
          <p>لنفترض انك هتتعلم c++ من الزيرو يبقي هتبحث عن</p>
          <p>c++ online compiler</p>
          <p>
            و عموما عندك موقع w3schools فيه compiler للغه c++ و لغات تانيه فا
            تقدر تكتب عليه فا انت اللغه اللي انت عايزه و كمان عندك موقع ideone
            فيه لغات كتير تقدر تدخل و تشوفها بنفسك
          </p>
          <p>
            و ده للغات البرمجه بس بقي في الويب هنعمل ايه عادي هنستخدم موقع{" "}
            <a
              href="https://codepen.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              codepen.io
            </a>{" "}
            و ده حلو جداا او هنستخدم{" "}
            <a
              href="https://github.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.dev
            </a>{" "}
            بس ده شرط باين انك تكون عامل ريبو على الgithub و ده بقي نفس شكل
            الvscode و كمان بنفس الاضافات اللي فيه و طريقه تشغيله كان راسكو
            عاملها فا مش هعملها تاني و اهو الفيديو روح شوفه
          </p>
          <p>
            <a
              href="https://fb.watch/hbfQT3oCK7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              فيديو راسكو
            </a>
          </p>
          <p>
            بس لنفترض انك عايز برنامج للويب يبقي عندك مش عايز موقع مش كل يوم
            هتروح علي الموقع و حاجات كتير هقولك في برنامج اسمه anWriter او
            TrebEdit او Acode او جرب شوف اللي هيعجبك و لو انت تعرف واحد تاني
            ممكن تكتبه في التعليقات
          </p>
          <p>
            واحد هيقولي انا عايز كمان برنامج لpython هقولك عندك برنامج اسمه
            pydroid و ده الصراحه في مميزات حلوه{" "}
            <a
              href="https://www.freecodecamp.org/news/how-to-code-on-your-phone-python-pydroid-android-app-tutorial/"
              target="_blank"
              rel="noopener noreferrer"
            >
              و ده مقال بيشرح البرنامج
            </a>
          </p>
          <p>
            طب انا هرتب دلوقتي برامج و جمب كل برنامج بيعمل ايه عشان تبقي عارف
          </p>
          <ul>
            <li>anWriter - Web</li>
            <li>TrebEdit - Web</li>
            <li>Acode - Web</li>
            <li>pydroid - Python IDE</li>
            <li>dcoder - Web</li>
            <li>AIDE - C++ IDE And Java</li>
          </ul>
          <p>
            نيجي بقي لاول حاجه انا كتبتها و هو برنامج termux ده عن طريقه هتقدر
            تسطب php عندك عن طريق الامر
          </p>
          <pre>
            <code className="language-bash">pkg install php -y</code>
          </pre>
          <p>بعد كده هتدخل على ملفات التليفون من الامر</p>
          <pre>
            <code className="language-bash">cd /sdcard</code>
          </pre>
          <p>
            و بعد كده هتعمل فولدر اللي هتحط فيه مشاريعك و لنفترض اني هسميه php و
            ده المفروض مكتبش الامر بس ده عن طريق الامر
          </p>
          <pre>
            <code className="language-bash">mkdir php</code>
          </pre>
          <p>بعد كده هتدخل عليه من الامر</p>
          <pre>
            <code className="language-bash">cd php</code>
          </pre>
          <p>
            و هتعمل ملف اسمه index.php وتكتب جواه كل الاوامر اللي انت عايزها بعد
            كده هتعمل
          </p>
          <pre>
            <code className="language-bash">php -S localhost:2011</code>
          </pre>
          <p>
            و ده بيشغل السيرفر علي localhost:2011 و تقد تغير الport اللي هو 2011
            لاي حاجه انت عايزها و لو مشتغلش غيره عشان احتمال يكون محجوز
          </p>
          <p>و لو عايز تثبت db او mysql هيبقي من الامر ده</p>
          <pre>
            <code className="language-bash">pkg install mariadb -y</code>
          </pre>
          <p>و عشان تشغلها هيبقي من</p>
          <pre>
            <code className="language-bash">mysql -u root</code>
          </pre>
          <p>و لو عايز تسطب node هيبقي من الامر ده</p>
          <pre>
            <code className="language-bash">pkg install nodejs-lts</code>
          </pre>
          <p>و تقدر تبحث انت بقي عن اي حاجه انت عايز تسطبها و هتلاقي اجابتك</p>
          <p>و البرنامج بتاع الكود فى الباك ممكن يبقي اي واحد من ال3</p>
          <p>
            و البرنامج الاخير علي ما اعتقد ده للموبيل ابلكيشن يعني ممكن تعمل من
            عليه برنامج للموبيل
          </p>
          <p>
            و نيجي بقي لاخر حاجه و هي مجال الالعاب و ده عن طريق برنامج Godot و
            مش محتاج اقولك ان ده محتاج يكون تليفونك قوي عشان ممكن يهنج منك و انت
            شغال
          </p>
          <p>و بس كده ده كان مقال النهارده</p>
        </div> */}
        <div className="divider"></div>
        <div className="bg-base-200 p-5">
          <div className="bg-base-100 p-3">
            <h3 className="text-lg">
              المشاهدات: <span className="text-primary">{post.views}</span>
            </h3>
          </div>
          <div className="divider"></div>
          <div className="bg-base-100 p-3">
            <h3 className="text-lg">
              القسم:{" "}
              <Link to={`/category/${post.category}`} className="text-primary">
                {post.category}
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
