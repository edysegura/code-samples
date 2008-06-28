<?php
$feedback = new Feedback();
$comments = $feedback->listComments();

foreach($comments as $comment) {
	echo "<dl>
					<dt>{$comment->name}, {$comment->email}</dt>
					<dd>{$comment->comments}</dd>
				</dl>";
}
?>