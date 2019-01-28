import fs from 'fs';
import Handlebars from 'handlebars';

const ApplicationConfiguration = {
  templateFile: '',
  compiledTemplate: null as Handlebars.TemplateDelegate<any> | null,
  getFile: (fileName: string): string => {
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
  compileTemplate: (template: string): Handlebars.TemplateDelegate<any> | null => {
    try {
      if (!ApplicationConfiguration.compiledTemplate && template) {
        ApplicationConfiguration.compiledTemplate = Handlebars.compile(template);
      }
    } catch (err) {
      console.error(`[application-configuration] (compileTemplate) An unhandled exception occurred`, err);
    }

    return ApplicationConfiguration.compiledTemplate;
  },
  renderTemplate: (data: { state: string; content: string }): string | null => {
    let renderedPage = null;

    try {
      if (!ApplicationConfiguration || !ApplicationConfiguration.compiledTemplate) {
        console.error(`[application-configuration] (applyTemplate) Compiled template not found`);
      } else {
        renderedPage = ApplicationConfiguration.compiledTemplate(data);
      }
    } catch (err) {
      console.error(`[application-configuration] (applyTemplate) An unhandled exception occurred`, err);
    }

    return renderedPage;
  }
};

export default ApplicationConfiguration;
