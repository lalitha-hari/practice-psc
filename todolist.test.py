import unittest
from bs4 import BeautifulSoup

# Sample HTML content for testing
html_content = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample Page</title>
</head>
<body>
    <div id="taskList">
        <ul>
            <li id="task1">Task 1</li>
            <li id="task2">Task 2</li>
            <li id="task3">Task 3</li>
        </ul>
    </div>
</body>
</html>
"""

class TestWebScraping(unittest.TestCase):
    def setUp(self):
        self.soup = BeautifulSoup(html_content, 'html.parser')

    def tearDown(self):
        pass

    def test_find_task_list(self):
        task_list_div = self.soup.find('div', id='taskList')
        self.assertIsNotNone(task_list_div)
        self.assertEqual(task_list_div['id'], 'taskList')

    def test_find_tasks(self):
        task_items = self.soup.select('#taskList li')
        self.assertIsNotNone(task_items)
        self.assertEqual(len(task_items), 3)

    def test_find_task_by_id(self):
        task = self.soup.find('li', id='task2')
        self.assertIsNotNone(task)
        self.assertEqual(task.text.strip(), 'Task 2')

if __name__ == '__main__':
    unittest.main()
