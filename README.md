# gas-formapp-parser
Parsing a Google Form Data (Question and Options) to a JSON File with Google Apps Script

## How to run

1. Create your own google form. 
2. Get it's ID from the URL. 
3. Open Parser.gs change `formId` variable to your Form ID.
4. Specify output directory (one level deep) and the json filename.
4. Create your Google Apps Script app.
5. Paste the content from Parser.gs to Code.gs
6. Run the `generateFormData` method.
7. Open your google drive folder and find the json file according to your specified output directory.

## Features that not supported 

This list define a set of features that cannot be generated from the `FormItem`. This is happened because there was no available API from the FormApp documentation.

1. TEXT
    - Validation
2. PARAGRAPH_TEXT
    - Validation
3. MULTIPLE_CHOICE
    - Go to section   
    - Shuffle option order
4. CHECKBOX
    - Shuffle option order
5. LIST
    - Go to section   
    - Shuffle option order
7. CHECKBOX_GRID
    - Limit to one response per column
    - Shuffle row order
8. GRID
    - Limit to one response per column
    - Shuffle row order
9. VIDEO
    - URL
    - Caption
10. Embedded image on each question

## Example

Generated json example:

```json
{
  "id": "1RggzXqU33Zf3M6wXLX2X5rj41MHwh-OCgBsW62wfk2g",
  "title": "Testing Google Form Options",
  "description": "To try things and range of options that google form has provided",
  "confirmationMessage": "",
  "requiresLogin": false,
  "collectsEmail": false,
  "isAcceptingResponses": true,
  "canEditResponse": false,
  "hasLimitOneResponsePerUser": false,
  "hasRespondAgainLink": true,
  "isPublishingSummary": false,
  "hasProgressBar": true,
  "destinationId": "1wfBujEJU6QQNFHR-E8sYjEJRAc-A4ZlEG3q0AaKEO0I",
  "destinationType": "SPREADSHEET",
  "editUrl": "https:\/\/docs.google.com\/forms\/d\/1RggzXqU33Zf3M6wXLX2X5rj41MHwh-OCgBsW62wfk2g\/edit",
  "publishedUrl": "https:\/\/docs.google.com\/forms\/d\/e\/1FAIpQLSdEVUOOI8zdi2DWJowHgpCp5lJoWp_twPpdihC1INsW7ocGCA\/viewform",
  "summaryUrl": "https:\/\/docs.google.com\/forms\/d\/1RggzXqU33Zf3M6wXLX2X5rj41MHwh-OCgBsW62wfk2g\/viewanalytics",
  "items": [
    [
      {
        "id": 226066067,
        "index": 0,
        "type": "TEXT",
        "title": "Short answer",
        "description": "Ini adalah description",
        "isRequired": false
      },
      {
        "id": 1248678137,
        "index": 1,
        "type": "PARAGRAPH_TEXT",
        "title": "Paragraph",
        "description": "Ini juga description",
        "isRequired": false
      }
    ],
    [
      {
        "id": 1085040329,
        "index": 2,
        "type": "PAGE_BREAK",
        "title": "Section 1",
        "description": "Ini section 1"
      },
      {
        "id": 911540160,
        "index": 3,
        "type": "MULTIPLE_CHOICE",
        "title": "Q Multiple choice",
        "description": "Ini masih description",
        "hasOtherOption": true,
        "choices": [
          "Option 1",
          "Option 2",
          "Option 3"
        ],
        "isRequired": false
      },
      {
        "id": 1355410926,
        "index": 4,
        "type": "CHECKBOX",
        "title": "Q Checkboxes",
        "description": "Aku mau description",
        "hasOtherOption": true,
        "choices": [
          "Option 1",
          "Option 2",
          "Option 3"
        ],
        "isRequired": false
      },
      {
        "id": 1956075477,
        "index": 5,
        "type": "LIST",
        "title": "Q Dropdown",
        "description": "Description di dropdown",
        "choices": [
          "Option 1",
          "Option 2",
          "Option 3"
        ],
        "isRequired": false
      }
    ],
    [
      {
        "id": 159300809,
        "index": 6,
        "type": "PAGE_BREAK",
        "title": "Section 2",
        "description": "Ini section 2"
      },
      {
        "id": 1219672274,
        "index": 7,
        "type": "FILE_UPLOAD",
        "title": "Q File upload",
        "description": "Iniii dessskripsi"
      }
    ],
    [
      {
        "id": 1490266404,
        "index": 8,
        "type": "PAGE_BREAK",
        "title": "Section 3",
        "description": "Ini section 3"
      },
      {
        "id": 1088733430,
        "index": 9,
        "type": "CHECKBOX_GRID",
        "title": "Q Checkbox grid",
        "description": "Require response in each row?",
        "grid": {
          "rows": [
            "Row 1",
            "Row 2"
          ],
          "cols": [
            "Column 1",
            "Column 2",
            "Column 3"
          ]
        },
        "isRequired": false
      },
      {
        "id": 705731182,
        "index": 10,
        "type": "GRID",
        "title": "Q Multiple choice grid",
        "description": "Deskripsi pg grid",
        "grid": {
          "rows": [
            "Row 1",
            "Row 2"
          ],
          "cols": [
            "Column 1",
            "Column 2",
            "Column 3"
          ]
        },
        "isRequired": false
      },
      {
        "id": 1652381351,
        "index": 11,
        "type": "SCALE",
        "title": "Q Linear scale",
        "description": "Linierrrr deskripstion",
        "scale": {
          "from": 1,
          "to": 5,
          "leftLabel": "Label 1",
          "rightLabel": "Label 5"
        },
        "isRequired": false
      }
    ],
    [
      {
        "id": 1593951443,
        "index": 12,
        "type": "PAGE_BREAK",
        "title": "Section 4",
        "description": "Ini section 4"
      },
      {
        "id": 929660042,
        "index": 13,
        "type": "DATE",
        "title": "Q Date",
        "description": "Ini date",
        "date": {
          "includesYear": true
        },
        "isRequired": false
      },
      {
        "id": 2145372731,
        "index": 14,
        "type": "DATETIME",
        "title": "Q Datetime",
        "description": "Ini des datetime",
        "date": {
          "includesYear": true
        },
        "isRequired": false
      },
      {
        "id": 1735697513,
        "index": 15,
        "type": "TIME",
        "title": "Q Time",
        "description": "Ini time biasa",
        "isRequired": false
      },
      {
        "id": 1433480960,
        "index": 16,
        "type": "DURATION",
        "title": "Q Duration",
        "description": "Kalo ini duration",
        "isRequired": false
      }
    ],
    [
      {
        "id": 1560593825,
        "index": 17,
        "type": "PAGE_BREAK",
        "title": "Section 5",
        "description": "Ini section 5"
      },
      {
        "id": 1786252962,
        "index": 18,
        "type": "SECTION_HEADER",
        "title": "The title",
        "description": "The description"
      },
      {
        "id": 743892210,
        "index": 19,
        "type": "IMAGE",
        "title": "Image left",
        "description": "hovered text",
        "image": {
          "alignment": "LEFT",
          "width": 562,
          "blob": "\ufffd\ufffd\ufffd xxxxxx"
        }
      },
      {
        "id": 1945806951,
        "index": 20,
        "type": "IMAGE",
        "title": "Image center",
        "description": "",
        "image": {
          "alignment": "CENTER",
          "width": 562,
          "blob": "\ufffd\ufffd\ufffd xxxxx"
        }
      },
      {
        "id": 1612115088,
        "index": 22,
        "type": "VIDEO",
        "title": "Video left",
        "description": "Caption untuk video ini"
      },
      {
        "id": 1952020424,
        "index": 23,
        "type": "VIDEO",
        "title": "Video center",
        "description": ""
      },
      {
        "id": 1969217623,
        "index": 24,
        "type": "VIDEO",
        "title": "Video right",
        "description": ""
      },
      {
        "id": 1940859752,
        "index": 25,
        "type": "TEXT",
        "title": "Embedded image left on short Q answer",
        "description": "Gambar ngga bisa diambil anehnya teh",
        "isRequired": false
      },
      {
        "id": 418962624,
        "index": 26,
        "type": "PARAGRAPH_TEXT",
        "title": "Q Embedded image center on paragraph",
        "description": "ini juga gambarnya pasti ngga muncul",
        "isRequired": false
      },
      {
        "id": 173256086,
        "index": 27,
        "type": "MULTIPLE_CHOICE",
        "title": "Q Embedded image right on multiple choice (without \"add other\" and with required)",
        "description": "",
        "hasOtherOption": false,
        "choices": [
          "Option 1",
          "Option 2",
          "Option 3"
        ],
        "isRequired": true
      }
    ]
  ]
}
```
