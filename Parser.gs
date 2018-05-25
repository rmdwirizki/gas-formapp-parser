// Generate all form options to a json file
function generateFormData() {
  var formId = 'xxxxxxxxxxxxx'; // Insert your form id here
  var form = FormApp.openById(formId);
  var formData = {};
   
  formData.id = form.getId();
  formData.title = form.getTitle();
  formData.description = form.getDescription();
  formData.confirmationMessage = form.getConfirmationMessage();
  
  formData.requiresLogin = form.requiresLogin();
  formData.collectsEmail = form.collectsEmail();
  
  formData.isAcceptingResponses = form.isAcceptingResponses();
  formData.canEditResponse = form.canEditResponse();
  formData.hasLimitOneResponsePerUser = form.hasLimitOneResponsePerUser();
  formData.hasRespondAgainLink = form.hasRespondAgainLink();
  formData.isPublishingSummary = form.isPublishingSummary();
  
  formData.hasProgressBar = form.hasProgressBar();
  
  formData.destinationId = form.getDestinationId();
  formData.destinationType = form.getDestinationType().toString();
  
  formData.editUrl = form.getEditUrl();
  formData.publishedUrl = form.getPublishedUrl();
  formData.summaryUrl = form.getSummaryUrl();
  
  formData.items = [];
  
  var sectionCount = 0;
  formData.items[sectionCount] = [];
  
  var items = form.getItems();
  for(var i = 0; i < items.length; i++) {
    
    // Set basic properties of item
    
    var item = {
      id: items[i].getId(),
      index: items[i].getIndex(),
      type: items[i].getType().toString(),
      title: items[i].getTitle(),
      description: items[i].getHelpText()
    };
    
    // Cast Instance according to each Item Type
    
    var instance = null;
    
    if(item.type == 'PAGE_BREAK') {
      instance = items[i].asPageBreakItem();
    }
    else if(item.type == 'SECTION_HEADER') {
      instance = items[i].asSectionHeaderItem();
    }
    else if(item.type == 'TEXT') {
      instance = items[i].asTextItem();
    }
    else if(item.type == 'PARAGRAPH_TEXT') {
      instance = items[i].asParagraphTextItem();
    }
    else if(item.type == 'MULTIPLE_CHOICE') {
      instance = items[i].asMultipleChoiceItem();
    }
    else if(item.type == 'CHECKBOX') {
      instance = items[i].asCheckboxItem();
    }
    else if(item.type == 'LIST') {
      instance = items[i].asListItem();
    }
    // else if(item.type == 'FILE_UPLOAD') {
    //   instance = items[i].as...Item();
    // }
    else if(item.type == 'CHECKBOX_GRID') {
      instance = items[i].asCheckboxGridItem();
    }
    else if(item.type == 'GRID') {
      instance = items[i].asGridItem();
    }
    else if(item.type == 'SCALE') {
      instance = items[i].asScaleItem();
    }
    else if(item.type == 'DATE') {
      instance = items[i].asDateItem();
    }
    else if(item.type == 'DATETIME') {
      instance = items[i].asDateTimeItem();
    }
    else if(item.type == 'DURATION') {
      instance = items[i].asDurationItem();
    }
    else if(item.type == 'TIME') {
      instance = items[i].asTimeItem();
    }
    else if(item.type == 'IMAGE') {
      instance = items[i].asImageItem();
    }
    else if(item.type == 'VIDEO') {
      instance = items[i].asVideoItem();  
    }
    
    if(item.type == 'PAGE_BREAK') {
      var goToPage = instance.getGoToPage();
      if(goToPage) {
        item.page = {};
        item.page.goToId = goToPage.getId();
      }
    }
    
    if(item.type == 'MULTIPLE_CHOICE' ||
       item.type == 'CHECKBOX' ||
       item.type == 'LIST') {
          
     if(typeof instance.hasOtherOption === 'function') {
        item.hasOtherOption = instance.hasOtherOption();
     }
     item.choices = [];
     var choices = instance.getChoices();
     for(var j = 0; j < choices.length; j++) {
       item.choices.push(choices[j].getValue());
      }
    }
    
    if(item.type == 'CHECKBOX_GRID' ||
       item.type == 'GRID') {
      item.grid = {};
      item.grid.rows = instance.getRows();
      item.grid.cols = instance.getColumns();
    }
    
    if(item.type == 'SCALE') {
      item.scale = {};
      item.scale.from = instance.getLowerBound();
      item.scale.to = instance.getUpperBound();
      item.scale.leftLabel = instance.getLeftLabel();
      item.scale.rightLabel = instance.getRightLabel();
    }
    
    if(item.type == 'DATE' ||
       item.type == 'DATETIME') {
      item.date = {};
      item.date.includesYear = instance.includesYear();
    }
    
    if(item.type == 'IMAGE') {
      item.image = {};
      item.image.alignment = instance.getAlignment().toString();
      item.image.width = instance.getWidth();
      
      if(instance.getImage()) {
        item.image.blob = instance.getImage().getDataAsString();
      }
    }
    
    if(item.type == 'VIDEO') {
      item.video = {};
      item.video.alignment = instance.getAlignment().toString();
      item.video.width = instance.getWidth();
    }
    
    if(instance) {
      if(typeof instance.isRequired === 'function') {
        item.isRequired = instance.isRequired();
      }
    }
    
    if(item.type == 'PAGE_BREAK') {
      sectionCount++;
      formData.items[sectionCount] = [];
    }
    
    formData.items[sectionCount].push(item);
  }

  var folder = getFolder('Labs');
  if (folder != false) {
    updateFile(folder, 'qdataviz.json', JSON.stringify(formData));
  }
}

// Create or get existing folder
// [One level deep only]
function getFolder (foldername) {
  try {
    // folder is unique, so we can get first element of iterator
    var folder = DriveApp.getFoldersByName(foldername).next();
    return folder;
  } catch(e) {
    return false;
  }
}

// Creates or replaces an existing file
function updateFile (folder, filename, data) {
  try {
    // filename is unique, so we can get first element of iterator
    var file = folder.getFilesByName(filename).next();
    file.setContent(data);
  } catch(e) {
    folder.createFile(filename, data);
  }
}
