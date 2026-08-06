# Malformed & Edge Case Markdown

This file intentionally contains broken, incomplete, and unusual markdown to test that the renderer degrades gracefully without crashing.

## Unclosed Formatting Markers

This has an **unclosed bold marker with no matching close.

This has an *unclosed italic marker with no matching close.

This has an unclosed `inline code marker with no matching backtick.

This has ~~unclosed strikethrough with no matching close.

## Unclosed Code Block

```javascript
function broken() {
  console.log("this fence is never closed");

## Mismatched / Nested Emphasis

**Bold with *italic inside** but italic never closes*

***Triple marker that doesn't resolve cleanly**

## Broken Links

[Link text with no url]()

[Link text with missing closing paren](https://www.example.com

[](https://www.example.com)

Just some brackets [not a link] in a sentence.

## Broken Tables

Table missing some cells:

| Col A | Col B | Col C |
|---|---|---|
| Only one |
| Two | cells |

Table with no header separator row:

| Col A | Col B |
| Value 1 | Value 2 |

Ragged table with extra pipes:

| A | B | C |
|---|---|---|
| 1 | 2 | 3 | 4 | 5 |

## Malformed Lists

- Item one
  - Nested item with inconsistent indentation
      - Over-indented item
   - Under-indented item
- Item two

1. First
3. Skipped number two
2. Out of order
10. Jumps ahead

- Mixed marker list
* switching marker mid-list
+ and again

## Empty / Near-Empty Elements

##

>

- 

1. 

```

```

## Excessive Nesting

> > > > > Five levels of blockquote nesting with no content build-up in between.

- L1
  - L2
    - L3
      - L4
        - L5
          - L6
            - L7 - very deep nesting

## Raw HTML Mixed In

<div>This is a raw HTML block inside markdown.</div>

<script>alert('should not execute or break rendering')</script>

Some text with an inline <span style="color:red">HTML span</span> in the middle.

## Special Characters & Escaping

Unescaped characters: 5 > 3 and 2 < 4 and A & B.

Escaped characters: \*not italic\*, \`not code\`, \# not a heading.

A line ending with a backslash\
should behave like a hard line break.

## Extremely Long Unbroken Line

Thisisanextremelylongunbrokenstringwithnospaceswhatsoeverdesignedtotestwhethertherendererscontainerandtextwrappingcanhandleoverflowcontentgracefullywithoutbreakingthelayoutorcausinghorizontalscrollingissuesinsidethepreviewpane.

## Incomplete Document

The file ends abruptly mid-thought with an unclosed list:

- Item A
- Item B
  - Nested item that just stops
