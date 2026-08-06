# Full Feature Showcase

## Headings

# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
##### H5 Heading
###### H6 Heading

## Paragraphs

This is a normal paragraph with several sentences. It should wrap naturally and render with standard spacing between lines and paragraphs.

This is a second paragraph, separated from the first by a blank line, to confirm paragraph breaks are respected.

## Text Formatting

This sentence has **bold text**, *italic text*, ***bold and italic text***, and ~~strikethrough text~~.

You can also use __bold with underscores__ and _italic with underscores_.

## Inline Code

Use the `useState` hook to manage component state. You can also reference a variable like `myVariable` or a command like `npm install`.

## Code Blocks

Fenced code block with a language tag:

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
  return true;
}
```

Fenced code block without a language tag:

```
plain text code block
no syntax highlighting expected
```

Indented code block (4 spaces):

    function oldStyle() {
      return "indented code block";
    }

## Blockquotes

> This is a simple blockquote.

> This is a multi-line blockquote.
> It continues on a second line.
>
> And has a second paragraph inside it.

> Nested blockquote:
> > This is nested one level deep.
> > > This is nested two levels deep.

## Unordered Lists

- Item one
- Item two
- Item three

* Item using asterisk marker
* Another item

+ Item using plus marker
+ Another item

## Ordered Lists

1. First item
2. Second item
3. Third item

1. Item using all 1s
1. Should still render as 2
1. Should still render as 3

## Nested Lists

- Fruits
  - Apple
  - Banana
    - Cavendish
    - Plantain
  - Cherry
- Vegetables
  1. Carrot
  2. Potato
     - Russet
     - Yukon Gold
  3. Onion

1. Step one
   - Sub point A
   - Sub point B
2. Step two
   1. Sub-step 2.1
   2. Sub-step 2.2
      - Deep nested bullet
3. Step three

## Tables

| Feature      | Supported | Priority |
|--------------|:---------:|---------:|
| Headings     | Yes       | High     |
| Tables       | Yes       | High     |
| Nested lists | Yes       | Medium   |

Simple table without alignment markers:

| Name | Role |
| --- | --- |
| Alice | Engineer |
| Bob | Designer |

Table with varying column widths and inline formatting:

| Item | Description | Price |
|---|---|---|
| Widget | A **small** and *useful* widget | $9.99 |
| Gadget | Contains `inline code` in the description | $19.99 |

## Hyperlinks

This is an [inline link](https://www.example.com) to example.com.

This is a [link with a title](https://www.example.com "Example Site") attribute.

This is a bare autolink: <https://www.example.com>

Reference-style link: [Anthropic][anthropic-ref]

[anthropic-ref]: https://www.anthropic.com "Anthropic Homepage"

## Mixed / Combined Elements

> **Note:** This blockquote contains a [link](https://www.example.com), some `inline code`, and **bold text** all together.

1. First step: run `npm install`
2. Second step: edit the **config file**
   - Set `debug: true`
   - Set `verbose: false`
3. Third step: read the [documentation](https://www.example.com)

| Task | Status |
|---|---|
| ~~Old task~~ | Done |
| **New task** | In Progress |

---

Horizontal rule above this line.
