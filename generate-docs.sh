#!/bin/sh

PICKLES_DIR=/home/neil/Code/Pickles.NetCore/src/Pickles.CommandLine/
SPECS_DIR=/home/neil/Code/doubleloop-specs/Features
SPECS_OUTPUT_DIR=/home/neil/Code/doubleloop-specs/docs/
PROJECT_NAME="doubleloop.net specs"

echo "### Generating specs ###"
cd $PICKLES_DIR
rm -rf $SPECS_OUTPUT_DIR && dotnet run --f $SPECS_DIR --o $SPECS_OUTPUT_DIR --df dhtml --sn $PROJECT_NAME

cd $SPECS_DIR
