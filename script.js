const data = {
    "*": {
      "margin": "0",
      "padding": "0",
      "list-style": "none",
      "text-decoration": "none",
      "font-family": "'Poppins', sans-serif"
    },
    "#main": {
      "width": "100%",
      "min-height": "100vh",
      "background": "grey",
      "display": "flex",
      "justify-content": "center",
      "align-items": "center"
    },
    ".main-box": {
      "width": "80%",
      "min-height": "80vh",
      "background": "linear-gradient(to right bottom,rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.1))",
      "border-radius": "1rem",
      "backdrop-filter": "blur(2rem)",
      "z-index": "4"
    },
    ".circle1,.circle2": {
      "background": "linear-gradient(to right bottom,rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.4));",
      "height": "15rem",
      "width": "15rem",
      "border-radius": "50%",
      "position": "absolute",
      "z-index": "2"
    },
    ".circle1": { "top": "4%", "right": "2%" },
    ".circle2": { "bottom": "4%", "left": "2%" },
    ".main-box nav ul": { "display": "flex", "justify-content": "space-between" },
    ".btn": {
      "padding": "10px 20px",
      "color": "#fff",
      "font-weight": "300",
      "border-radius": "2rem",
      "cursor": "pointer"
    },
    ".logo": { "height": "180px" },
    "script": "None",
    "body": { "background": "red" }
  }

class Css {
    of = (json)=>{
        const selectors = Object.keys(json)
        return selectors.map((selector) => {
            const definition = json[selector]
            const rules = Object.keys(definition)
            const result = rules.map((rule) => {
            return `${rule}:${definition[rule]}`
            }).join(';')
            return `${selector}{${result}}`
        }).join('\n')
    }
}

const main_style = document.getElementById('main_style')
const css =new Css()
main_style.append(css.of(data))
