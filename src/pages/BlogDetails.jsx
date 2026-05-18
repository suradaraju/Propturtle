import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import "../assets/css/BlogDetails.css";
import Navbar from "../components/Navbar";
import Footer from '../components/footer.jsx';
import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

export default function BlogDetails() {
  const { slug } = useParams();

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <h2>Blog not found</h2>;

  return (
    <>
    {/* <Helmet>
  <title>{blog.title} | aasasas</title>
</Helmet> */}
    <Navbar />
    <div className="blog-details container">
      <h1>{blog.title}</h1>

      <img src={blog.image} alt={blog.title} className="blog-cover" />

      <div className="blog-body">
        {blog.sections.map((block, i) => {
          if (block.type === "heading") {
            return <h2 key={i}>{block.content}</h2>;
          }

          // if (block.type === "paragraph") {
          //   return <p key={i}>{block.content}</p>;
          // }
  //         if (block.type === "paragraph") {
  // if (typeof block.content === "string" && block.content.includes("{home}")) {
  //   const parts = block.content.split("{home}");
  //   return (
  //     <p key={i}>
  //       {parts[0]}
  //       <Link to="/" className="blog-home-link">Propturtle</Link>
  //       {parts[1]}
  //     </p>
  //   );
  // }

  // return <p key={i}>{block.content}</p>;
// }
// if (block.type === "paragraph") {

//   // Handle {home} link (your existing logic)
//   if (typeof block.content === "string" && block.content.includes("{home}")) {
//     const parts = block.content.split("{home}");
//     return (
//       <p key={i}>
//         {parts[0]}
//         <Link to="/" className="blog-home-link">Propturtle</Link>
//         {parts[1]}
//       </p>
//     );
//   }

//   // ✅ NEW: Handle external links (http / https)
//   if (typeof block.content === "string" && block.content.includes("http")) {
//     const url = block.content.match(/https?:\/\/[^\s]+/);

//     return (
//       <p key={i}>
//         {block.content.replace(url[0], "")}
//         <a
//           href={url[0]}
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ color: "blue", textDecoration: "underline" }}
//         >
//           Click here to read more
//         </a>
//       </p>
//     );
//   }

//   return <p key={i}>{block.content}</p>;
// }
// if (block.type === "paragraph") {

//   // Handle {home}
//   if (block.content.includes("{home}")) {
//     const parts = block.content.split("{home}");
//     return (
//       <p key={i}>
//         {parts[0]}
//         <Link to="/" className="blog-home-link">Propturtle</Link>
//         {parts[1]}
//       </p>
//     );
//   }

//   // ✅ NEW: bold + clickable link inside text
//   if (block.linkText && block.linkUrl) {
//     return (
//       <p key={i}>
//         {block.content}
//         <a
//           href={block.linkUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           // style={{ fontWeight: "bold", color: "#007bff" }}
//           style={{
//   fontWeight: "bold",
//   color: "#007bff",
//   textDecoration: "underline"
// }}
//         >
//           {block.linkText}
//         </a>
//       </p>
//     );
//   }

//   return <p key={i}>{block.content}</p>;
// }
// if (block.type === "paragraph") {

//   // ✅ Handle {home}
//   if (block.content.includes("{home}")) {
//     const parts = block.content.split("{home}");
//     return (
//       <p key={i}>
//         {parts[0]}
//         <Link to="/" className="blog-home-link">Propturtle</Link>
//         {parts[1]}
//       </p>
//     );
//   }

  // ✅ Auto convert URL → clickable link
  // const urlRegex = /(https?:\/\/[^\s]+)/g;

  // if (urlRegex.test(block.content)) {
  //   const parts = block.content.split(urlRegex);

  //   return (
  //     <p key={i}>
  //       {parts.map((part, index) =>
  //         urlRegex.test(part) ? (
  //           <a
  //             key={index}
  //             href={part}
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             style={{
  //               color: "#007bff",
  //               textDecoration: "underline",
  //               fontWeight: "bold"
  //             }}
  //           >
  //             {part}
  //           </a>
  //         ) : (
  //           part
  //         )
  //       )}
  //     </p>
  //   );
  // }
//   const urlRegex = /(https?:\/\/[^\s]+)/g;

// if (urlRegex.test(block.content)) {
//   const parts = block.content.split(urlRegex);

//   return (
//     <p key={i}>
//       {parts.map((part, index) => {
//         // ✅ Handle line break keyword
//         if (part.includes("BRBREAK")) {
//           return <br key={index} />;
//         }

//         // ✅ Handle URL
//         if (/^https?:\/\//.test(part)) {
//           return (
//             <a
//               key={index}
//               href={part}
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{
//                 color: "#007bff",
//                 textDecoration: "underline",
//                 fontWeight: "bold"
//               }}
//             >
//               {part}
//             </a>
//           );
//         }

//         return part;
//       })}
//     </p>
//   );
// }

//   // return <p key={i}>{block.content}</p>;
//   return <p key={i} dangerouslySetInnerHTML={{ __html: block.content }} />
// }


if (block.type === "paragraph") {

  // ✅ Handle {home}
  if (block.content.includes("{home}")) {
    const parts = block.content.split("{home}");
    return (
      <p key={i}>
        {parts[0]}
        <Link to="/" className="blog-home-link">Propturtle</Link>
        {parts[1]}
      </p>
    );
  }

  // ✅ IMPORTANT: If HTML tags exist → render directly
  if (/<\/?[a-z][\s\S]*>/i.test(block.content)) {
    return (
      <p
        key={i}
        dangerouslySetInnerHTML={{ __html: block.content }}
      />
    );
  }

  // ✅ Fallback: auto link plain URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  if (urlRegex.test(block.content)) {
    const parts = block.content.split(urlRegex);

    return (
      <p key={i}>
        {parts.map((part, index) =>
          /^https?:\/\//.test(part) ? (
            <a
              key={index}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#007bff",
                textDecoration: "underline",
                fontWeight: "bold"
              }}
            >
              {part}
            </a>
          ) : (
            part
          )
        )}
      </p>
    );
  }

  return <p key={i}>{block.content}</p>;
}

                 if (block.type === "image") {
    return (
      <div key={i} className="blog-image-block">
        <img src={block.src} alt={block.alt || ""} />
      </div>
    );
  }
if (block.type === "list") {
  return (
    <ul key={i} className="blog-list">
      {block.content.map((item, idx) => {

         if (item.type === "image") {
          return (
            <div key={idx} className="blog-image-block">
              <img src={item.src} alt={item.alt || ""} />
            </div>
          );
        }
        
        // ✅ Case 1: Simple bullet list
        if (typeof item === "string") {
          return <li key={idx}>{item}</li>;
        }

        // ✅ Case 2: Title + Single Description
        if (item.desc) {
          return (
            <li key={idx}>
              <strong>{item.title}</strong>
              <div className="list-desc">{item.desc}</div>
            </li>
          );
        }

        // ✅ Case 3: Title + Multiple Paragraphs
        if (item.paragraphs) {
          return (
            <li key={idx}>
              <strong>{item.title}</strong>
              {item.paragraphs.map((p, pi) => (
                <p key={pi} className="list-desc">{p}</p>
              ))}
            </li>
          );
        }

  

        return null;
      })}
    </ul>
  );
}




          return null;
        })}
      </div>
    </div>
    <Footer />
    </>
  );
}
