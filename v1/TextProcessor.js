function TextProcessor(inputSource){
    if('localFile' === inputSource){
        return new LocalFileTextProcessor();
    }else if('textArea' === inputSource){
        return new TextAreaTextProcessor();
    }else{
        return null;
    }
}

TextProcessor.prototype.process = function(){}
TextProcessor.prototype.processLine = function(){}


function LocalFileTextProcessor(){
    
}

LocalFileTextProcessor.prototype = new TextProcessor;

function TextAreaTextProcessor(){
    
}

TextAreaTextProcessor.prototype = new TextProcessor;