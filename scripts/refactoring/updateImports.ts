import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isAbsolute(value: string) {
  const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages'];
  if (layers.some((layer) => value.startsWith(layer))) {
    return true;
  }
}

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations();
  importDeclarations.forEach((importDeclarations) => {
    const value = importDeclarations.getModuleSpecifierValue();

    if (isAbsolute(value)) {
      importDeclarations.setModuleSpecifier('@/' + value);
    }
  });
});

project.save();
