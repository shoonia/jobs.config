# Velo jobs.config Builder & Validator

[![Build for Velo by Wix](https://img.shields.io/badge/Built%20for-Velo%20by%20Wix-3638f4)](https://wix.com/velo)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<img src="src/assets/logo.svg" width="150" height="150" align="right" alt="Velo By Wix">

**Interactive builder and validator for Velo job scheduler configuration files**

A powerful web-based tool for creating, editing, and validating `jobs.config` files for Wix Velo's Job Scheduler. Build complex job configurations with ease using an intuitive interface or validate existing configurations for errors.

## 🚀 Features

- **Visual Builder**: Create job configurations using an intuitive form interface
- **Real-time Validation**: Instant feedback on configuration errors with detailed explanations
- **File Upload Support**: Upload existing `jobs.config` files for editing and validation
- **Export Functionality**: Download your validated configurations as ready-to-use files
- **Comprehensive Error Messages**: Clear, actionable error messages with context from official Wix documentation
- **Multiple Scheduling Options**: Support for both time-based and cron expression scheduling

## 🔗 Quick Links

- **[Builder](https://shoonia.github.io/jobs.config/#builder)** - Create new job configurations interactively
- **[Validator](https://shoonia.github.io/jobs.config/#validator)** - Validate existing configurations
- **[Upload & Edit](https://shoonia.github.io/jobs.config/#upload)** - Upload and modify existing config files

## 📖 What is Velo Job Scheduler?

Velo Job Scheduler allows you to schedule backend functions to run at specific times or intervals. Common use cases include:

- 📊 Generate and send daily/weekly reports
- 🗑️ Clean up old data from collections
- 📧 Send scheduled email campaigns
- 🔄 Sync data with external services
- 📈 Perform periodic analytics calculations

## 🛠️ Configuration Structure

A `jobs.config` file contains job definitions with the following properties:

```json
{
  "jobs": [
    {
      "functionLocation": "path/to/your/function.js",
      "functionName": "yourFunctionName",
      "description": "Optional job description",
      "executionConfig": {
        "time": "08:00",
        "dayOfWeek": "Monday"
      }
    }
  ]
}
```

### Required Properties

- **`functionLocation`**: Path to the backend file containing your job function
- **`functionName`**: Name of the function to execute
- **`executionConfig`**: Configuration defining when the job runs

### Scheduling Options

**Option 1: Time-based scheduling**
```json
{
  "time": "14:30",           // UTC time in HH:MM format
  "dayOfWeek": "Friday"      // Optional: specific day
  // OR
  "dateInMonth": 15          // Optional: specific date (1-31)
}
```

**Option 2: Cron expressions**
```json
{
  "cronExpression": "0 9 * * 1-5"  // 9 AM weekdays
}
```

## 📚 Documentation & Resources

- **[Official Velo Job Scheduler Documentation](https://dev.wix.com/docs/develop-websites/articles/workspace-tools/developer-tools/recurring-jobs/about-scheduling-recurring-jobs)**
- **[Cron Expression Guide](https://en.wikipedia.org/wiki/Cron#CRON_expression)**

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🙏 Acknowledgments

Built for the Velo by Wix developer community to simplify job scheduling configuration.

---

**Made with ❤️ for Velo developers**
