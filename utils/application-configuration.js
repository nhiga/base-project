import fs from 'fs';
import Handlebars from 'handlebars';

const ApplicationConfiguration = {
  templateFile: null,
  compiledTemplate: null,
  getFile: (fileName = null) => {
    try {
      console.info(`[ApplicationConfiguration] (getFile) filename: ${fileName}`);
      if (!ApplicationConfiguration.templateFile && fileName) {
        ApplicationConfiguration.templateFile = fs.readFileSync(fileName, { encoding: 'utf-8' });
      }
    } catch (err) {
      console.error(`[application-configuration] (getFile) An unhandled exception occurred`, err);
    }

    return ApplicationConfiguration.templateFile;
  },
  compileTemplate: (templateName = null) => {
    try {
      if (!ApplicationConfiguration.compiledTemplate && templateName) {
        ApplicationConfiguration.compiledTemplate = Handlebars.compile(templateName);
      }
    } catch (err) {
      console.error(`[application-configuration] (compileTemplate) An unhandled exception occurred`, err);
    }

    return ApplicationConfiguration.compiledTemplate;
  },
  applyTemplate: ({ content }) => {
    let renderedPage = null;

    try {
      if (!ApplicationConfiguration.compiledTemplate) {
        console.error(`[application-configuration] (applyTemplate) Compiled template not found`);
      }

      renderedPage = ApplicationConfiguration.compiledTemplate({ content });
    } catch (err) {
      console.error(`[application-configuration] (applyTemplate) An unhandled exception occurred`, err);
    }

    return renderedPage;
  }
};

export default ApplicationConfiguration;
