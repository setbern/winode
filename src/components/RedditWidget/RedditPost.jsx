import { get } from "lodash";
import React, { Component, Fragment } from "react";
import styled from "styled-components";



import "../../styles/RedditPost.css";

import Colors from "../../constants/colors";

import Title from '../Title';
import Text from '../Text';

const PostContainer = styled.a`
	cursor: pointer;
	display: block;
	text-decoration: none;
	margin-bottom: 4px;
	background-color: ${props => props.theme.background}
`;


const PostTitle = styled.div`
	font-weight: 700;
`;
const PostSource = styled.div``;
const PostBody = styled.div`
	max-height: 72px;
	overflow: hidden;
`;
const MediaContent = styled.div`
	display: flex;
`;
const PostMedia = styled.img`
	height: ${props => props.height};
	width: ${props => props.width};
`;


const PostContent = (props) => {
	return (
		<div className='PostContent'>
			{props.children}
		</div>
	)
}
const RedditVoter = (props) => {
	return (
		<div className='RedditVoter'>
			{props.children}
		</div>
	)
};

export default class RedditPost extends Component {
	renderMediaContent() {
		const { post } = this.props;

		return (
			<React.Fragment>
				<MediaContent>
					<PostMedia src={get(post, 'thumbnail')} height={get(post, 'thumbnail_height')} width={get(post, 'thumbnail_width')} />

					<PostTitle>{get(post, "title")}</PostTitle>
				</MediaContent>
				<PostSource>{get(post, 'subreddit_name_prefixed')}</PostSource>
			</React.Fragment>
		);
	}

	renderTextContent() {
		const { post } = this.props;

		return (
			<Fragment>
				<Title reddit>{get(post, 'title')}</Title>
				<Text subtext>{get(post, "subreddit_name_prefixed")}</Text>
				<Text reddit>{get(post, "selftext")}</Text>
			</Fragment>
		);
	}

	render() {

		const { post } = this.props;

		return (
			<PostContainer 
				href={get(post, 'url')} 
				target="_blank"
				className='RedditPost'
				style={{ padding: '1rem' }}
			>

				<PostContent>
					{
						this.renderTextContent()
					}
				</PostContent>
			</PostContainer>
		);
	}
}
