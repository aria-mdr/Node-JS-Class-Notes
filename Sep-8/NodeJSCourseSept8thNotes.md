General topics: class notes & recordings will be stored in a tab of the
"node class" slack channel.

Indentation: Structures your code with proper spacing, helps
readability.

Tabline AI auto complete Extension ( dont pay for the full version )

  -------------------------------------
  Overview of VS Code:

  Explorer: Look for a file Search :
  Search for a file Source Control:
  Manage GIT Debugging: Helps debug
  code Extensions: Plugins and Qualiy
  of life improvments for VSCODE
  Terminal: a way to talk to your
  computer without opening other
  applications (command line) -
  Creation of file, moving files,
  Allows you to use nodeJs
  -------------------------------------

HTML is made up of 3 components:

Tag: What you want to display, There is an opening and a closing, what
you want to display inbetween them.

Content: What goes inside of the tags of the element, what we want the
content to say.

Attributes:ways of naming and passing of information to an HTML Tag.

  ---------------------------------------
  HTML Boilerplate Discriptions:

  Doctype: Tells the computer what type
  of file this is

  Head tag : Meta information about the
  current page, such as title, links to
  style sheets, does not display but
  difines what links are relevent in the
  HTML document.

  Body: Anything HTML put inside of the
  body section will be displayed on the
  webpage
  ---------------------------------------

Different types of tags we talked about:

```{=html}
<p>
```
Block elements
```{=html}
</p>
```
Inline text
`<!-- Comment tag, anything between will not be displayed -->`{=html}
`<br/>`{=html} - Break tag, end the line. go to the next line.
```{=html}
<hr/>
```
-   Horizontal line, the same as break but draws a line
    ```{=html}
    <pre>
    ```
    -   Like a paragraph but respects all the spacing in the markup
        unlike the
        ```{=html}
        <p>
        ```
        tag. `<strong>`{=html} - Bold text
        ```{=html}
        <ol>
        ```
        -   Orderd list - Numbers
            ```{=html}
            <ul>
            ```
            -   Unorderd List - Bullet points
                ```{=html}
                <li>
                ```
                -   List Items, goes inside of the orderd or unordered
                    list. `<a>`{=html} - anchor tag, gives the ability
                    to link things `<img>`{=html} - takes an attribute
                    and displays an image inside of the body
                    ---------------------------------------- CSS: We can
                    grab an element, and then give it certain styles.

Attritutes like, class, id, span are all referrenced as "selectors" in
css and are used to select specific HTML elements so you can style them
further.

Open Selector -\> Open tags -\> Indent and style

Nesting Attibutes: getting even more specific with what is being styled:
span, strong {color: blue} will select ONLY the span tags with a strong
tags.

the more specific the nesting the higher priority it will take.

!important = override any other priorities and uses the line it is
written on

  ----------------------------------------
  Overview of yesterdays:

  \- Computers are dumb but good at
  following commands, thats where
  programmers come in. We write code in
  english syntax, compilers convert it to
  binary and the computer can then
  understand and run it and will follow
  the task.

  NodeJS: what is it? an engine and a
  compiler for javascript.

  Front end: Anything the user can see in
  the browser, We write this in HTML and
  CSS markup and the browser converts and
  draws it onto your screen.

  HTML: Hypertext markup language, the raw
  text and format of the information you
  want to display, very boring no style (
  we need css!)

  CSS: Cascade style sheet : the style
  component to the front end, background
  color, text style.

  Bank end: Where all the computing and
  functionality happen, javascript and the
  back end is every "action" or
  interactiveness on the webpage

  Data: a text file, all the user
  information, excel sheets for example
  then the back end code can request the
  database for information it needs.
  ----------------------------------------

Timelines for final project: work with aria, or ta's by the specific
dates meeting the requirements stated on the calander

------------------------------------------------------------------------

Peer Questions:

Webpack - what does it do, takes your code and shrinks it into a smaller
file so it is a "lighter" for the computer as the computer only needs to
read 0's and 1's not the javascript syntax we know.
